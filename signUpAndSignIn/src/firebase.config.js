// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNKMSJIBraUW93hHzLxHGBcCGxydw4GpA",
    authDomain: "signin-and-signup-f4f91.firebaseapp.com",
    projectId: "signin-and-signup-f4f91",
    storageBucket: "signin-and-signup-f4f91.appspot.com",
    messagingSenderId: "521830573413",
    appId: "1:521830573413:web:3b48aac537c02dd687ad8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;