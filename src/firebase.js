import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

import "firebase/compat/storage";



const firebaseConfig = {

    apiKey: "AIzaSyDeZVgMaawQEedAKezgRCK67_HJJ0pKH_Y",

    authDomain: "instagram-clone-react-ad048.firebaseapp.com",

    projectId: "instagram-clone-react-ad048",

    storageBucket: "instagram-clone-react-ad048.appspot.com",

    messagingSenderId: "50544077752",

    appId: "1:50544077752:web:203ac23d1b94df0666bd4d"

};



// Use this to initialize the firebase App

const firebaseApp = firebase.initializeApp(firebaseConfig);



// Use these for db & auth

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();



export { auth, db, storage };