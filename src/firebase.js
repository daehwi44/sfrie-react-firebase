import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgCGAnzVQiC4dezEps9QSYzxaZ91-z6T4",
  authDomain: "sfrie-with-react-and-firebase.firebaseapp.com",
  projectId: "sfrie-with-react-and-firebase",
  storageBucket: "sfrie-with-react-and-firebase.appspot.com",
  messagingSenderId: "948730576522",
  appId: "1:948730576522:web:1e023bb8df0775be407773"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };