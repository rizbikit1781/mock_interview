import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO0IajIWQu4R-V7exthVSKZgSMmH78Tkw",
  authDomain: "pixel-peak-ai.firebaseapp.com",
  projectId: "pixel-peak-ai",
  storageBucket: "pixel-peak-ai.firebasestorage.app",
  messagingSenderId: "516614711884",
  appId: "1:516614711884:web:12550eb868807d2479a2e9",
  measurementId: "G-BQ6DEZXLMW",
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
