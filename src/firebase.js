import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBtZjWGIpSHoaIjjSINZ4iPgqtprQPOd9g",
    authDomain: "chatify-8a37a.firebaseapp.com",
    projectId: "chatify-8a37a",
    storageBucket: "chatify-8a37a.appspot.com",
    messagingSenderId: "410844811271",
    appId: "1:410844811271:web:f77e0da7fa28581d5a5aa2"
  }).auth();