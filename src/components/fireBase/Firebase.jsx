// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBixUNvQL_6fy78PP1ZvzrgUetDWfVYDQA",
  authDomain: "login-auth-f344a.firebaseapp.com",
  projectId: "login-auth-f344a",
  storageBucket: "login-auth-f344a.appspot.com",
  messagingSenderId: "927757886694",
  appId: "1:927757886694:web:da70e111ebc0df4e748727",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
