import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRCEhJrI3NTY3NBfp3Ko97FcT5xhqZxXg",
  authDomain: "clothing-store-5ff90.firebaseapp.com",
  projectId: "clothing-store-5ff90",
  storageBucket: "clothing-store-5ff90.appspot.com",
  messagingSenderId: "725232475520",
  appId: "1:725232475520:web:f69dedeb4e57060baeb565",
  measurementId: "G-8XZPT06K8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
