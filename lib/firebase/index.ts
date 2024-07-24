// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKji5feOdpqmKS0ETu6tHSII3Uu7Yuw9E",
    authDomain: "nextjs-whatsapp-413f4.firebaseapp.com",
    projectId: "nextjs-whatsapp-413f4",
    storageBucket: "nextjs-whatsapp-413f4.appspot.com",
    messagingSenderId: "322554681884",
    appId: "1:322554681884:web:e26fde0ba8a0d478ed9dd9",
    measurementId: "G-B1B88VRGNX"
  };
// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage();

export { firestoreApp, googleProvider, auth, storage };
