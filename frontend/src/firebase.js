// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "damlaportfolio.firebaseapp.com",
  projectId: "damlaportfolio",
  storageBucket: "damlaportfolio.appspot.com",
  messagingSenderId: "23772160935",
  appId: "1:23772160935:web:b7dc22cb925ac8914dcc82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
