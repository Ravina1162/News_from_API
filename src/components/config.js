import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBxSuNnm04zzB-gXK0pIad9xKiCVLYSKs8",
  authDomain: "latest-news-c2ebd.firebaseapp.com",
  projectId: "latest-news-c2ebd",
  storageBucket: "latest-news-c2ebd.appspot.com",
  messagingSenderId: "934248151449",
  appId: "1:934248151449:web:dfce1ec6431cd0afbbfb08",
  measurementId: "G-SMLFFZ7CBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider}