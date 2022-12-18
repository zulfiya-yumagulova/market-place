// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo0uXcCTxsGvcaqOr__9QTQ2f8My0KJUc",
  authDomain: "house-marketplace-app-6979f.firebaseapp.com",
  projectId: "house-marketplace-app-6979f",
  storageBucket: "house-marketplace-app-6979f.appspot.com",
  messagingSenderId: "514791792211",
  appId: "1:514791792211:web:94f3c0c69780517f0270a6",
  measurementId: "G-42X6PGHJQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
