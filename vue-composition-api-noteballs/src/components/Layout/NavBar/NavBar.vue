<script setup>
  import { ref } from "vue";
  import { onClickOutside } from "@vueuse/core";
  import { useAuthStore } from "@/stores/storeAuth";
  import { useRouter } from "vue-router";

  const authStore = useAuthStore();
  const router = useRouter();

  const showMobileNav = ref(false);

  const navbarMenuRef = ref(null);
  const navbarBurger = ref(null);

  onClickOutside(
    navbarMenuRef,
    (event) => {
      showMobileNav.value = false;
    },
    {
      ignore: [navbarBurger],
    }
  );

  const login = () => {
    showMobileNav.value = false;
    router.push("/auth");
  };

  const logout = () => {
    authStore.logoutUser();
    showMobileNav.value = false;
  };
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
        <div v-if="authStore.user?.id" class="has-text-grey-dark is-size-7 m-4">
          Logged as {{ authStore.user.email }}
        </div>
        <div class="navbar-end">
          <template v-if="authStore.user?.id">
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

            <button class="button is-small m-3" @click.prevent="logout">
              Log out
            </button>
          </template>
          <button v-else class="button is-small m-3" @click.prevent="login">
            Log in
          </button>
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
