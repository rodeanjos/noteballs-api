<script setup>
  import { ref } from "vue";
  import Note from "@/components/Notes/Notes.vue";
  import InputTemplate from "@/components/InputTemplate/InputTemplate.vue";
  import { useNotesStore } from "@/stores/storeNotes";

  const notesStore = useNotesStore();

  const newNote = ref("");
  const inputRef = ref(null);

  const addNote = () => {
    notesStore.addNote(newNote.value);

    newNote.value = "";
    inputRef.value.focusTextArea();
  };
</script>
<template>
  <div class="notes">
    <InputTemplate v-model="newNote" ref="inputRef">
      <template #buttons>
        <button
          @click.prevent="addNote()"
          :disabled="!newNote"
          class="button is-success"
        >
          Add new note
        </button>
      </template>
    </InputTemplate>
    <progress
      v-if="!notesStore.notesLoaded"
      class="progress is-link"
      max="100"
    />
    <template v-else>
      <Note v-for="i in notesStore.notes" :key="i.id" :note="i" />
    </template>
    <div
      v-if="!notesStore.notes.length"
      class="has-text-centered has-text-grey-light"
    >
      There is no notes to show
    </div>
  </div>
</template>
