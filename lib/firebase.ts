// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mylink-project-723b1.firebaseapp.com",
  projectId: "mylink-project-723b1",
  storageBucket: "mylink-project-723b1.firebasestorage.app",
  messagingSenderId: "925051957843",
  appId: "1:925051957843:web:73a0a1236250f03c6a4ca6",
  measurementId: "G-ZBVQMK2XYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only works in browser, not SSR)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
