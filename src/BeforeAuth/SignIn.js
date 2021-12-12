import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZtKfe5EeDBpYGYajfJcFgCQEtIu3Hok8",
  authDomain: "learnapp-82cdd.firebaseapp.com",
  databaseURL: "https://learnapp-82cdd.firebaseio.com",
  projectId: "learnapp-82cdd",
  storageBucket: "learnapp-82cdd.appspot.com",
  messagingSenderId: "756798606467",
  appId: "1:756798606467:web:2cf4faea21ca7a245adfb6",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default function Navigator () {
    return (
        <div>
        <header>
            <img src={} alt='logo'/>
            <b>Lubs</b>
        </header> 

        <div>
            Functional yet Intuitive
        </div>


        </div>
    )
}