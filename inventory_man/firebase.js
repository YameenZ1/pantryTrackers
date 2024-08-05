// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA76YtMfoZiAOLrhb9Uf9o4ctxuCgjHPfc",
  authDomain: "inventory-man-71e7c.firebaseapp.com",
  projectId: "inventory-man-71e7c",
  storageBucket: "inventory-man-71e7c.appspot.com",
  messagingSenderId: "678391087710",
  appId: "1:678391087710:web:d8af9380faa2e2c17a6acf",
  measurementId: "G-PB548HXRP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}