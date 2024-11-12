<script setup>
  import { computed, reactive, ref } from "vue";
  import { useAuthStore } from "@/stores/storeAuth";
  import { useRouter } from "vue-router";

  const authStore = useAuthStore();
  const router = useRouter();

  const register = ref(true);

  const formTitle = computed(() => {
    return register.value ? "Register" : "Login";
  });

  const credentials = reactive({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    if (register.value) {
      authStore.registerUser(credentials);
    } else {
      authStore.loginUser(credentials);
    }
  };
</script>
<template>
  <div class="auth">
    <div class="tabs is-centered is-toggle">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a
            @click.prevent="register = false"
            :class="`${register === false ? '' : 'has-background-white'}`"
            >Login</a
          >
        </li>
        <li :class="{ 'is-active': register }">
          <a
            @click.prevent="register = true"
            :class="`${register === true ? '' : 'has-background-white'}`"
            >Register</a
          >
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ formTitle }}</div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="e.g. test@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Enter a password"
              />
            </div>
          </div>
          <div class="field is-grouped is-grouped-centered mt-6">
            <p class="control">
              <button
                class="button is-primary"
                :disabled="!credentials.email || !credentials.password"
              >
                {{ formTitle }}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .auth-form {
    width: 400px;
    margin: 0 auto;
  }
</style>
