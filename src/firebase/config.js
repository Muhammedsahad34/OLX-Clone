import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCWuuOn4qWFjNAGhZY_UhhRG4Wxq2lk0XQ",
    authDomain: "olx-clone-65efc.firebaseapp.com",
    projectId: "olx-clone-65efc",
    storageBucket: "olx-clone-65efc.appspot.com",
    messagingSenderId: "379586019009",
    appId: "1:379586019009:web:da5cc35839d5b0ab9c1e40",
    measurementId: "G-QFHTVEEYN8"
  };
export default firebase.initializeApp(firebaseConfig);