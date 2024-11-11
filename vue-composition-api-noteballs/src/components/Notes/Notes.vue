<script setup>
  import { computed, reactive } from "vue";
  import { useDateFormat } from "@vueuse/core";
  import ModalDeleteNote from "../Modals/ModalDeleteNote.vue";

  const props = defineProps({
    note: {
      type: Object,
      required: true,
    },
  });

  const characterLength = computed(() => {
    let length = props.note.content.length;
    let desc = length > 1 ? "characters" : "character";
    return `${length}` + " " + `${desc}`;
  });

  const modals = reactive({
    deleteNote: false,
  });

  const formatted = computed(() => {
    let date = new Date(parseInt(props.note.date));
    return useDateFormat(date, "DD/MM/YY HH:mm");
  });
</script>
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ formatted }}</small> <br />
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`${'/edit-note/' + note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a @click.prevent="modals.deleteNote = true" class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    />
  </div>
</template>
