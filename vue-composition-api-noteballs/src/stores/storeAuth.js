import { defineStore } from "pinia";
import { auth } from "@/js/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNotesStore } from "./storeNotes";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const notesStore = useNotesStore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/");
          notesStore.init();

        } else {
          this.user = {};
          notesStore.clearNotes();
          this.router.replace("/auth")
        }
      });
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // const user = userCredential.user;
          // console.log("registrado: "+ user)
        })
        .catch((error) => {
          console.log(error.code + " " + error.message);
        });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // const user = userCredential.user;
          // console.log("logado: " + user);
        })
        .catch((error) => {
          console.log(error.code + " " + error.message);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          // console.log("loggout");
        })
        .catch((error) => {
          console.log(error.code + " " + error.message);
        });
    },
  },
});
