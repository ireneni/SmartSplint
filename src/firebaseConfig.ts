// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15hha3hZlYN6fhi1Hd-r-bFvRXAM6s44",
  authDomain: "smartsplint-6b8ec.firebaseapp.com",
  projectId: "smartsplint-6b8ec",
  storageBucket: "smartsplint-6b8ec.firebasestorage.app",
  messagingSenderId: "461092687360",
  appId: "1:461092687360:web:b0d0a53d6ba7aad6f2d2e5",
  measurementId: "G-GJ7ESRKFGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { storage };