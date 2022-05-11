// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzL7cpy_j71IAs9DBAkzVy8jt2tyaPRi8",
  authDomain: "htlite-c7797.firebaseapp.com",
  projectId: "htlite-c7797",
  storageBucket: "htlite-c7797.appspot.com",
  messagingSenderId: "233530528785",
  appId: "1:233530528785:web:ec7312df2e77ac02f38db0",
  measurementId: "G-BV7F6HZQZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);