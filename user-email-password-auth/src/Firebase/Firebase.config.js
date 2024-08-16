// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMupzrG7CiTp9RdIAOzFacxV9rVHNXodo",
    authDomain: "email-password-login-b8c78.firebaseapp.com",
    projectId: "email-password-login-b8c78",
    storageBucket: "email-password-login-b8c78.appspot.com",
    messagingSenderId: "901318444484",
    appId: "1:901318444484:web:d510647fba0e997002d091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;