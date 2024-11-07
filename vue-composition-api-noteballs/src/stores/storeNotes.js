import { defineStore } from "pinia";

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus quis reiciendis incidunt omnis maiores veritatis repudiandae ex non, doloremque assumenda id nesciunt architecto quae aliquam eum hic debitis natus!",
        },
        {
          id: "id2",
          content: "A shorter note!",
        },
        {
          id: "id3",
          content: "A note from store!",
        },
      ],
    };
  },
  actions: {
    addNote(noteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id: id,
        content: noteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(noteId) {
      this.notes = this.notes.filter((note) => note.id !== noteId);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);

      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (idToFind) => {
        return state.notes.filter((note) => note.id === idToFind)[0].content;
      };
    },
  },
});
