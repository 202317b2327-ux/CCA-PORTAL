// Import Firebase
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB9_BivxcGLoY3HipP_c571pA9Robd0yPE",
  authDomain: "bits-design-project-6a748.firebaseapp.com",
  projectId: "bits-design-project-6a748",
  storageBucket: "bits-design-project-6a748.firebasestorage.app",
  messagingSenderId: "585653073256",
  appId: "1:585653073256:web:a7ba483097c8829b3952dd"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore for other pages
export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };