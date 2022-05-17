import React, { useState } from 'react';
import './App.css';
import Typing from './pages/typing';
import Auth from './pages/auth'

// Import the functions you need from the SDKs you need


import firebase from "firebase/app";
import "firebase/functions"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"



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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();


if (window.location.host === "localhost:3000") {
  firebase.functions().useEmulator("localhost", 5001);
  db.useEmulator('localhost', 8080);
  //@ts-ignore
  auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
}


function App() {
  const [signedIn, setSignedIn] = useState(auth.currentUser !== null)


  return (
    <div className="App">
      <div>header</div>
      {signedIn &&
        <Typing {...{ db, functions }} />}
      {!signedIn &&
        <Auth {...{auth, firebase, setSignedIn}} />}
      <div>footer</div>
    </div>
  );
}

export default App;
