<script setup>
  import { computed } from "vue";

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

  const emit = defineEmits(['deleteClicked'])

  const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id)
  };
</script>
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`${'/edit-note/' + note.id}`" class="card-footer-item">Edit</RouterLink>
      <a @click.prevent="handleDeleteClicked" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>
