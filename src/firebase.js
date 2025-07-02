// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 


const firebaseConfig = {
  apiKey: "AIzaSyB18saV5LBIBDD3SdThpNF89VZ3Q5xqhQY",
  authDomain: "sassmatch-c8d35.firebaseapp.com",
  databaseURL:"https://sassmatch-c8d35-default-rtdb.firebaseio.com/",
  projectId: "sassmatch-c8d35",
  storageBucket: "sassmatch-c8d35.firebasestorage.app",
  messagingSenderId: "771324330387",
  appId: "1:771324330387:web:ca9d22c60ac8835f962866",
  measurementId: "G-JEKV22G2N5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
