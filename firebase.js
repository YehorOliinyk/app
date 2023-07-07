// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgWqQsmUtpTkryP2gsPYv3CyCL5aTK-mo",
  authDomain: "app-test-b1b85.firebaseapp.com",
  databaseURL: "https://app-test-b1b85-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "app-test-b1b85",
  storageBucket: "app-test-b1b85.appspot.com",
  messagingSenderId: "1077619460259",
  appId: "1:1077619460259:web:a0037d50215faa453a9716"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
