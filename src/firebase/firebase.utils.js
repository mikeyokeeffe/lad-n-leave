import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBT8bKlxKLGqzbJgqmOJwLIbp6a9aN5Rf8",
  authDomain: "ladnleave.firebaseapp.com",
  databaseURL: "https://ladnleave.firebaseio.com",
  projectId: "ladnleave",
  storageBucket: "ladnleave.appspot.com",
  messagingSenderId: "1041537289771",
  appId: "1:1041537289771:web:03a5f4023034a1d902246e",
  measurementId: "G-698JS7RVKD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
