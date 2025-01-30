import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Додаємо Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYLto8L_9xwk4E0j-OnAEYNrzBNmUJjtA",
  authDomain: "cadets-e4fc1.firebaseapp.com",
  projectId: "cadets-e4fc1",
  storageBucket: "cadets-e4fc1",
  messagingSenderId: "791983782000",
  appId: "1:791983782000:web:a88960d6d5da86ed941cb5",
  measurementId: "G-8F3S8KT6HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Ініціалізація Firestore

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, db, doc, getDoc };
