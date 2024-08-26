// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT-n6xz-Kv0v_kWz3pqb3_ZuB3X6CLPHU",
    authDomain: "module51-f64f4.firebaseapp.com",
    projectId: "module51-f64f4",
    storageBucket: "module51-f64f4.appspot.com",
    messagingSenderId: "15052066732",
    appId: "1:15052066732:web:869494ddde2d266018f409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;