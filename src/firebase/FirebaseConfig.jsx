// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Yd9mL6BFljS977vSOPKY_-TX3nB5_ZU",
  authDomain: "krishi-mitra-6bc64.firebaseapp.com",
  projectId: "krishi-mitra-6bc64",
  storageBucket: "krishi-mitra-6bc64.appspot.com",
  messagingSenderId: "160058279398",
  appId: "1:160058279398:web:bb86e7823ac94ced7f8227"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
