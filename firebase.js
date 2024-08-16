// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { Analytics } from "@vercel/analytics/react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADvX7NWUq65fEU_iAaIrvqHFo_J2MMdT4",
  authDomain: "flashcard-saas-adkm.firebaseapp.com",
  projectId: "flashcard-saas-adkm",
  storageBucket: "flashcard-saas-adkm.appspot.com",
  messagingSenderId: "174498238215",
  appId: "1:174498238215:web:aaea13090fa03e6427bfa2",
  measurementId: "G-0PRF4JX99X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const db = getFirestore(app); // Use getFirestore, not getFireBase


export {db}