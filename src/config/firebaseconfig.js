import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAZVF8kR429xYzaAOYstopUwBdd1xa_SO8",
  authDomain: "task-89c59.firebaseapp.com",
  projectId: "task-89c59",
  storageBucket: "task-89c59.appspot.com",
  messagingSenderId: "413648397981",
  appId: "1:413648397981:web:e00bec80a2f3812aa05674"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const database = firebase.firestore();
export default firebase