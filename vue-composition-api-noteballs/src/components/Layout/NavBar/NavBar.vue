<script setup>
  import { ref } from "vue";
  import { onClickOutside } from "@vueuse/core";

  const showMobileNav = ref(false);

  const navbarMenuRef = ref(null);
  const navbarBurger = ref(null)

  onClickOutside(navbarMenuRef, (event) => {
    showMobileNav.value = false;
  }, {
    ignore: [navbarBurger]
  });
</script>
<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace has-text-white">
          Noteballs
        </div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger has-text-white"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active has-background-white': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="has-background-success-light"
            @click.prevent="showMobileNav = false"
          >
            Notes
          </RouterLink>

          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="has-background-success-light"
            @click.prevent="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
  @media (max-width: 1023px) {
    .navbar-menu {
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
</style>
