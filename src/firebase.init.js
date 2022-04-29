// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxWSwQzyJBBWqyRKYdm7L3Pvil9Rqu50o',
  authDomain: 'warehouse-client-side.firebaseapp.com',
  projectId: 'warehouse-client-side',
  storageBucket: 'warehouse-client-side.appspot.com',
  messagingSenderId: '520034998823',
  appId: '1:520034998823:web:90a3cf192fd70327804c02',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;