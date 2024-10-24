// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjg9fBg8wYAezG5lstSWUX90wXA1w0g_0",
  authDomain: "netflixgpt-93617.firebaseapp.com",
  projectId: "netflixgpt-93617",
  storageBucket: "netflixgpt-93617.appspot.com",
  messagingSenderId: "797702753102",
  appId: "1:797702753102:web:34639f69785a57f4da6c1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
