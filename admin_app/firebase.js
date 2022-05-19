// Import the functions you need from the SDKs you need
import * as firebase from "firebase";


// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig22 = {
    apiKey: "AIzaSyC25PwU0JWu08NInZuGm72V8fLYkKBfLGE",
    authDomain: "able-c900a.firebaseapp.com",
    projectId: "able-c900a",
    storageBucket: "able-c900a.appspot.com",
    messagingSenderId: "77108931115",
    appId: "1:77108931115:web:4d79f7f8beb042bd36186e"
};

// Initialize Firebase
const app2 = firebase.initializeApp(firebaseConfig22);
export const db = app2.firestore();
export const fire = firebase
export const storageRef = firebase.storage().ref();
const auth = firebase.auth();

export { auth };