<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import { useNotesStore } from "@/stores/storeNotes";

  const notesStore = useNotesStore();

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    noteId: {
      type: String,
      required: true,
    },
  });

  const emits = defineEmits(["update:modelValue"]);

  const closeModal = () => {
    emits("update:modelValue", false);
  };

  const modalRef = ref(null);

  onClickOutside(modalRef, closeModal);

  onMounted(() => {
    document.addEventListener("keyup", handleKeyPress);
  });

  onUnmounted(() => {
    document.removeEventListener("keyup", handleKeyPress);
  });

  const handleKeyPress = (e) => {
    if (e.key === "Escape") closeModal();
  };

  const deleteNote = () => {
    notesStore.deleteNote(props.noteId);
  };
</script>
<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note</p>
        <button
          @click.prevent="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button @click.prevent="closeModal" class="button">Cancel</button>
          <button @click.prevent="deleteNote" class="button is-danger">
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
