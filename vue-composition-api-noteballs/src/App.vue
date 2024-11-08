<script setup>
  import { onMounted } from "vue";
import NavBar from "./components/Layout/NavBar/NavBar.vue";
  import { useNotesStore } from "./stores/storeNotes";

  const notesStore = useNotesStore();

  onMounted(() => {
    notesStore.getNotesFromFirebase()
  })
</script>
<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <router-view></router-view>
  </div>
</template>
<style>
  @import "bulma/css/bulma.min.css";
</style>
