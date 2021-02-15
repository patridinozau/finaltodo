// import firebase from 'firebase/app'
// import 'firebase/firestore'
//
// // Initialize Firebase
// var firebaseConfig = {
//     apiKey: "AIzaSyAMlwTznNe4gY07PSMdPBQxF65jnVm-9I4",
//     authDomain: "finaltodo-52fc2.firebaseapp.com",
//     projectId: "finaltodo-52fc2",
//     storageBucket: "finaltodo-52fc2.appspot.com",
//     messagingSenderId: "981693524859",
//     appId: "1:981693524859:web:0a0af8db5624fa3c49ebde",
//     measurementId: "G-X3YPTTNHBQ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
//
//
// export default db;

import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMlwTznNe4gY07PSMdPBQxF65jnVm-9I4",
    authDomain: "finaltodo-52fc2.firebaseapp.com",
    databaseURL: "https://finaltodo-52fc2-default-rtdb.firebaseio.com",
    projectId: "finaltodo-52fc2",
    storageBucket: "finaltodo-52fc2.appspot.com",
    messagingSenderId: "981693524859",
    appId: "1:981693524859:web:0a0af8db5624fa3c49ebde",
    measurementId: "G-X3YPTTNHBQ"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;