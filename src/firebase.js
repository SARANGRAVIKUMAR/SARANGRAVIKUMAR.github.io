import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCR3fhCsmDUd2SeQKO113Cb4p3iHu2ZpVg",
  authDomain: "twitter-b33a5.firebaseapp.com",
  projectId: "twitter-b33a5",
  storageBucket: "twitter-b33a5.appspot.com",
  messagingSenderId: "442316255937",
  appId: "1:442316255937:web:c8e18019d85d6535a55a40",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
