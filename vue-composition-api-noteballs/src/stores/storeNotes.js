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

const collectionRef = collection(db, "notes");
const notesQuery = query(collectionRef, orderBy("id", "desc"));

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotesFromFirebase() {
      onSnapshot(notesQuery, (querySnapshot) => {
        let notesVar = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
          };
          notesVar.push(note);
        });
        this.notes = notesVar;
      });
    },
    async addNote(noteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      await addDoc(collectionRef, {
        id,
        content: noteContent,
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
