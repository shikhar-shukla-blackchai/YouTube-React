// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdqaKA7pxQ8EYd9UuQNgrQUlKqFyOummw",
  authDomain: "fir-973e0.firebaseapp.com",
  projectId: "fir-973e0",
  storageBucket: "fir-973e0.firebasestorage.app",
  messagingSenderId: "411040466859",
  appId: "1:411040466859:web:e8bf64a333b0e43ab5f4ee",
  measurementId: "G-T9B4YQ9KV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
