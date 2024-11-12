import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { useAuthStore } from "./storeAuth";

let collectionRef;
let notesQuery;
let getNotesSnapshot = null;

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },
  actions: {
    init() {
      const authStore = useAuthStore();

      collectionRef = collection(db, "users", authStore.user.id, "notes");
      notesQuery = query(collectionRef, orderBy("date", "desc"));

      this.getNotesFromFirebase();
    },
    async getNotesFromFirebase() {
      this.notesLoaded = false;

      getNotesSnapshot = onSnapshot(notesQuery, (querySnapshot) => {
        let notesVar = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notesVar.push(note);
        });
        this.notes = notesVar;
        this.notesLoaded = true;
      });
    },
    clearNotes() {
      this.notes = [];
      if (getNotesSnapshot) getNotesSnapshot() //unsubscribe from any active listener
    },
    async addNote(noteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(collectionRef, {
        content: noteContent,
        date,
      });
    },
    async deleteNote(noteId) {
      await deleteDoc(doc(collectionRef, noteId));
    },
    async updateNote(id, newContent) {
      await updateDoc(doc(collectionRef, id), {
        content: newContent,
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (idToFind) => {
        return state.notes.filter((note) => note.id === idToFind)[0].content;
      };
    },
    totalOfNotes: (state) => {
      return state.notes.length;
    },
    totalOfCharacters: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
