// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHbxJ-UAJRI-0uZTn31onnN3EJl8pSchU",
  authDomain: "bistro-24639.firebaseapp.com",
  projectId: "bistro-24639",
  storageBucket: "bistro-24639.firebasestorage.app",
  messagingSenderId: "959887663454",
  appId: "1:959887663454:web:7864b28ac09994c40aefcf",
  measurementId: "G-NN3YQ2H5LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };