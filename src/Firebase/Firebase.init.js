// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9y0Uo0RxyNkPuZ9sz2LvFIFwk146fnE",
  authDomain: "dragon-news-e25da.firebaseapp.com",
  projectId: "dragon-news-e25da",
  storageBucket: "dragon-news-e25da.firebasestorage.app",
  messagingSenderId: "250283400919",
  appId: "1:250283400919:web:d2d7e9f256f5b0bbf55a92"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
