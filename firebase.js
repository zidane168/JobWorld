// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD19vpIBYgpE8IZ5sywo_QvKW59JhfICos",
  authDomain: "gata-cv.firebaseapp.com",
  projectId: "gata-cv",
  storageBucket: "gata-cv.firebasestorage.app",
  messagingSenderId: "181407652197",
  appId: "1:181407652197:web:a96bf150b2af4c71f1e98c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export { storage }