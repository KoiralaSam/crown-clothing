import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  return response;
};

export const db = getFirestore();

export const signInWithAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        createdAt,
        email,
        ...additionalInformation,
      });

      console.log((await getDoc(doc(db, "users", userAuth.uid))).data());
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListner = async (callBack) => {
  {
    if (!callBack) return;
  }
  return onAuthStateChanged(auth, callBack);
};
