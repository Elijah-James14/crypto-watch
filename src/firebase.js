// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpCMRbgifobgwsN3y6RIuw5DVpS2DRkQ",
  authDomain: "coin-hive-b3d62.firebaseapp.com",
  projectId: "coin-hive-b3d62",
  storageBucket: "coin-hive-b3d62.appspot.com",
  messagingSenderId: "265642514268",
  appId: "1:265642514268:web:8effa54f3c15ff87afd399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
