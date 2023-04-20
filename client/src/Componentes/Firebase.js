import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 

const firebaseConfig = {
  apiKey: "AIzaSyAEhg9u-1-b4sEk3z5liLbUW1T7PwjOT-s",
  authDomain: "feroe-992e9.firebaseapp.com",
  projectId: "feroe-992e9",
  storageBucket: "feroe-992e9.appspot.com",
  messagingSenderId: "1028377835496",
  appId: "1:1028377835496:web:ccc2ff2d9840f156d0565d",
  measurementId: "G-QW9ERTT83W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export const dbFirebase = getFirestore(app);