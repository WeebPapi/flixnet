// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADaI3OpEMgY9rlfaaQdca7GEXv7s2YJ7c",
  authDomain: "flixnet-47472.firebaseapp.com",
  projectId: "flixnet-47472",
  storageBucket: "flixnet-47472.firebasestorage.app",
  messagingSenderId: "766633820777",
  appId: "1:766633820777:web:e2f9662565a76491fb58f8",
  measurementId: "G-VQ715ST9PX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

