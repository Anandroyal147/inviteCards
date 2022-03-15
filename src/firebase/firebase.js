// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcdk54eQygzC5VJjS2C1yrEHd0tVjENzM",
    authDomain: "invitecards-952f3.firebaseapp.com",
    databaseURL: "https://invitecards-952f3-default-rtdb.firebaseio.com",
    projectId: "invitecards-952f3",
    storageBucket: "invitecards-952f3.appspot.com",
    messagingSenderId: "994461494991",
    appId: "1:994461494991:web:33cd4422dfde7e593751ba",
    measurementId: "G-RT8YD93TLF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;