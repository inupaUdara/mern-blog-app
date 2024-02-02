// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c379d.firebaseapp.com",
  projectId: "mern-blog-c379d",
  storageBucket: "mern-blog-c379d.appspot.com",
  messagingSenderId: "646587560227",
  appId: "1:646587560227:web:12ebff5960477e708f5c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
