import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrM-OjmySBD24gXgscqZ_Via0_5Lj8dJc",
  authDomain: "noteballs-1bf54.firebaseapp.com",
  projectId: "noteballs-1bf54",
  storageBucket: "noteballs-1bf54.firebasestorage.app",
  messagingSenderId: "486285343993",
  appId: "1:486285343993:web:f937afdc4295d80581f628"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db
}