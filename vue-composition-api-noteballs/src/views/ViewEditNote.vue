<script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import InputTemplate from "@/components/InputTemplate/InputTemplate.vue";
  import { useNotesStore } from "@/stores/storeNotes";

  const router = useRouter();
  const route = useRoute();
  const NotesStore = useNotesStore();

  const inputRef = ref(null);
  const noteContent = ref("");

  noteContent.value = NotesStore.getNoteContent(route.params.id);

  const goBack = () => {
    router.back();
  };

  const handleSaveClicked = () => {
    NotesStore.updateNote(route.params.id, noteContent.value);
    goBack();
  };
</script>
<template>
  <div class="edit-note">
    <InputTemplate
      v-model="noteContent"
      ref="inputRef"
      placeholder="Edit note content"
      :label="$route.params.id"
    >
      <template #buttons>
        <div class="box-btn">
          <button @click.prevent="goBack()" class="button">Cancel</button>
          <button
            @click.prevent="handleSaveClicked()"
            :disabled="!noteContent"
            class="button is-success"
          >
            Save note
          </button>
        </div>
      </template>
    </InputTemplate>
  </div>
</template>
<style scoped>
  .box-btn {
    display: flex;
    gap: 10px;
  }
</style>
