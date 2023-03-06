
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage'
import "firebase/auth"

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCoeKq2Y1lPi8mAMnhJYh4jGm7MOQqPn6I",
  authDomain: "app-symphoniistudios.firebaseapp.com",
  projectId: "app-symphoniistudios",
  storageBucket: "app-symphoniistudios.appspot.com",
  messagingSenderId: "1005741251989",
  appId: "1:1005741251989:web:dec02a75d7e99cd46f2a9c"
});

export const auth = FirebaseApp.auth()
export const database = FirebaseApp.firestore();
const storage = firebase.storage()

export  {
  storage, FirebaseApp as default
}



 