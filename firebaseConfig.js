// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB2VeK3B5QTr078JfjRqN6Rnph9qAYhOVk",

  authDomain: "socialmedia-4c98e.firebaseapp.com",

  projectId: "socialmedia-4c98e",

  storageBucket: "socialmedia-4c98e.appspot.com",

  messagingSenderId: "177869625183",

  appId: "1:177869625183:web:9cdf2822cf4de384a1c8ea",

  measurementId: "G-CCLNHZT05P"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);