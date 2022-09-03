import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM_JRBptzHvAvyGFSWz-_YSAD0qQ5rBDU",
  authDomain: "linkedin-clone-f5251.firebaseapp.com",
  projectId: "linkedin-clone-f5251",
  storageBucket: "linkedin-clone-f5251.appspot.com",
  messagingSenderId: "216191397592",
  appId: "1:216191397592:web:012a6c7ca832db966171ad",
  measurementId: "G-51J1XJ0LNE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
