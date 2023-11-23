// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {  getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4UHsdQwdjqxeIS4YcNs_08BkYMoKlsC4",
  authDomain: "quickbuy-2023.firebaseapp.com",
  projectId: "quickbuy-2023",
  storageBucket: "quickbuy-2023.appspot.com",
  messagingSenderId: "628492618355",
  appId: "1:628492618355:web:f44df244988f2ab3ac3806",
  measurementId: "G-ELN0M024H8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;