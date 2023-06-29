import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOOEG7O5Czrr9CSiY987Z5Qtd6ZoUqrWI",
    authDomain: "insta-reels-clone-8354b.firebaseapp.com",
    databaseURL: "https://insta-reels-clone-8354b.firebaseio.com",
    projectId: "insta-reels-clone-8354b",
    storageBucket: "insta-reels-clone-8354b.appspot.com",
    messagingSenderId: "301468136803",
    appId: "1:301468136803:web:262d660ef18684da600f56",
    measurementId: "G-QMPYQ1J178"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
  