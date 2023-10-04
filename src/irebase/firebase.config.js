// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGVC5tveCi7xgTFRs_YwIViZZ3WGY8So",
  authDomain: "user-email-password-auth-ae432.firebaseapp.com",
  projectId: "user-email-password-auth-ae432",
  storageBucket: "user-email-password-auth-ae432.appspot.com",
  messagingSenderId: "915201615082",
  appId: "1:915201615082:web:13dda5942d98535bc6a393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth