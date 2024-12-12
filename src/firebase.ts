// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWq_mLK-mTbMP3eruAHI8mJBYe64uW8vM",
  authDomain: "reacord-43c33.firebaseapp.com",
  projectId: "reacord-43c33",
  storageBucket: "reacord-43c33.firebasestorage.app",
  messagingSenderId: "577302098979",
  appId: "1:577302098979:web:2037693ca192e97ee9ed96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =getAuth(app);
const provider =new GoogleAuthProvider();

export {auth,provider,db};