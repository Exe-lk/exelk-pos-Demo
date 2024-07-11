import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiE8lA0yOOpCpvTsMzcuqVWX0TdaiRHAY",
  authDomain: "test2-51aba.firebaseapp.com",
  projectId: "test2-51aba",
  storageBucket: "test2-51aba.appspot.com",
  messagingSenderId: "198007323502",
  appId: "1:198007323502:web:e1473d7056a35a5d679f7f",
  measurementId: "G-KXFFLDTH6M"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
export {app, auth, firestore, storage,database};