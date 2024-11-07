<script setup>
  import { ref } from "vue";
  import { useNotesStore } from "@/stores/storeNotes";
  import { vAutofocus } from "@/directives/vAutofocus";
  import { useWatchCharacters } from "@/use/useWatchCharacters";

  const NotesStore = useNotesStore();

  const feedback = ref("");

  useWatchCharacters(feedback, 5);
</script>
<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ NotesStore.totalOfNotes }}</td>
        </tr>
        <tr>
          <td>Number of characters</td>
          <td>{{ NotesStore.totalOfCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="feedback"
      class="input"
      type="text"
      placeholder="Any feedbacks?"
      v-autofocus
      maxlength="100"
    />
  </div>
</template>
