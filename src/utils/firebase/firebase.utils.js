import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1vuZxAQdkuWTYHyYeUhag3LXCoc2rYUY",
  authDomain: "crown-clothing-db-7f02b.firebaseapp.com",
  projectId: "crown-clothing-db-7f02b",
  storageBucket: "crown-clothing-db-7f02b.firebasestorage.app",
  messagingSenderId: "656556596305",
  appId: "1:656556596305:web:4b5aded00f6765106eac70",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, createdAt, email });
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
    }
  }
  return userDocRef;
};
