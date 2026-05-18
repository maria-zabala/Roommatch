import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCniEx5a99NzLZNeWCIaElzKerdBMPmBDI",
  authDomain: "roommatch-b5cc2.firebaseapp.com",
  projectId: "roommatch-b5cc2",
  storageBucket: "roommatch-b5cc2.firebasestorage.app",
  messagingSenderId: "308738367933",
  appId: "1:308738367933:web:9b9debee0f901a8a91b2d4",
  measurementId: "G-NE52FSX0S0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();