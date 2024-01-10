// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaRTUf-1j-S_KGU321WaFRyXdLqi3YBbM",
  authDomain: "mini-blog-8c693.firebaseapp.com",
  projectId: "mini-blog-8c693",
  storageBucket: "mini-blog-8c693.appspot.com",
  messagingSenderId: "918348797268",
  appId: "1:918348797268:web:4d726e9d24b6ce4fcae4c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };