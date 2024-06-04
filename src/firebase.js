// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Y2h23RUxKH6n_Ful9_HJXOye8IApjZ4",
  authDomain: "salehousepr.firebaseapp.com",
  projectId: "salehousepr",
  storageBucket: "salehousepr.appspot.com",
  messagingSenderId: "238410186241",
  appId: "1:238410186241:web:ce56f5b4765972cf840a00"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()