// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP13l7Pct6CE9YV96N7ksenuoi06s2ecE",
  authDomain: "brokersphere-503dd.firebaseapp.com",
  projectId: "brokersphere-503dd",
  storageBucket: "brokersphere-503dd.appspot.com",
  messagingSenderId: "413898651981",
  appId: "1:413898651981:web:2f4c6b70a03a42f34e9f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//Initialize Storage and get a reference  to the service
const storage = getStorage(app)
export {storage}
