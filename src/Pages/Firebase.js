// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA552W_mee50VIewZZF3HZr_bzew9dOFME",
  authDomain: "login-auth-f932e.firebaseapp.com",
  projectId: "login-auth-f932e",
  storageBucket: "login-auth-f932e.firebasestorage.app",
  messagingSenderId: "558087740395",
  appId: "1:558087740395:web:bde3f31ea3debb6e9597ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db =getFirestore(app);
export default app;