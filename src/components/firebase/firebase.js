// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQMEF2RT6ej7bUU92zSi3_VduLGczsiuU",
  authDomain: "meer-decor-interior72.firebaseapp.com",
  projectId: "meer-decor-interior72",
  storageBucket: "meer-decor-interior72.appspot.com",
  messagingSenderId: "748523745756",
  appId: "1:748523745756:web:4c5e0508dbcfb43ac25f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};