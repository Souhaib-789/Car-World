
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyDTCR-4AXf41Q3coCssC4AL4a07JTO8tw0",
    authDomain: "car-world-217a6.firebaseapp.com",
    projectId: "car-world-217a6",
    storageBucket: "car-world-217a6.appspot.com",
    messagingSenderId: "346373437504",
    appId: "1:346373437504:web:faba6b4c1a340960e807a5",
    measurementId: "G-B7ZTYVM103"
  });


const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);
 export {
   db,
   auth,
   storage,
   
createUserWithEmailAndPassword,
doc,
setDoc,
addDoc,
collection,
getDocs,
query,
getDoc,
onAuthStateChanged

 
 };
 