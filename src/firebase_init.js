// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMyDZxBYcGzuZuSPpCoxCIezxUFZWnFzU",
  authDomain: "fruitify-7007.firebaseapp.com",
  projectId: "fruitify-7007",
  storageBucket: "fruitify-7007.appspot.com",
  messagingSenderId: "562383010519",
  appId: "1:562383010519:web:d8b43299fcd1309c8e4e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;