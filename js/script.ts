import {Queue} from "./header";
import {main} from "./activeListeners";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq9a2lQADISCS85kdVfDk4AkSfKhcBAlE",
  authDomain: "emaqualcosa.firebaseapp.com",
  projectId: "emaqualcosa",
  storageBucket: "emaqualcosa.appspot.com",
  messagingSenderId: "66271776352",
  appId: "1:66271776352:web:e40db59222a5757c5e7d05",
  measurementId: "G-KT5K777HYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseConfig;


const Q = new Queue;

$(document).ready((function(){
    main();
}));