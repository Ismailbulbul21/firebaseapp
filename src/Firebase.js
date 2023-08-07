// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGcu9ed8bvWfUuQMs0JF4fQ_d9HROgWXQ",
  authDomain: "todolist-a5c29.firebaseapp.com",
  projectId: "todolist-a5c29",
  storageBucket: "todolist-a5c29.appspot.com",
  messagingSenderId: "205130081585",
  appId: "1:205130081585:web:c92dc8cef1b773fd8fbc10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);