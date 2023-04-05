// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ELT3_2QdaOIPuI8sw4SrxOaKZCK6IfE",
  authDomain: "ludilove-fb043.firebaseapp.com",
  projectId: "ludilove-fb043",
  storageBucket: "ludilove-fb043.appspot.com",
  messagingSenderId: "978004909467",
  appId: "1:978004909467:web:154aac653ab32d01ce153e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};