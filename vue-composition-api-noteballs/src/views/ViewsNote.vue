<script setup>
  import { ref } from "vue";
  import Note from "@/components/Notes/Notes.vue";

  const newNote = ref("");
  const newNoteRef = ref(null);

  const notes = ref([
    {
      id: "id1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus quis reiciendis incidunt omnis maiores veritatis repudiandae ex non, doloremque assumenda id nesciunt architecto quae aliquam eum hic debitis natus!",
    },
    {
      id: "id2",
      content: "A shorter note!",
    },
  ]);

  const addNote = () => {
    let currentDate = new Date().getTime(),
      id = currentDate.toString();

    let note = {
      id: id,
      content: newNote.value,
    };

    notes.value.unshift(note);

    newNote.value = "";
    newNoteRef.value.focus();
  };

  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => {
      return note.id !== idToDelete;
    });
  };
</script>
<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click.prevent="addNote()"
            :disabled="!newNote"
            class="button is-success"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>
    <Note
      v-for="i in notes"
      :key="i.id"
      :note="i"
      @delete-clicked="deleteNote"
    />
  </div>
</template>
