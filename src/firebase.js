import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBQ-VO_nIonMjrDPvBDhTspEFDtVcW_EI4",
  authDomain: "sheets-clone.firebaseapp.com",
  databaseURL: "https://sheets-clone.firebaseio.com",
  projectId: "sheets-clone",
  storageBucket: "sheets-clone.appspot.com",
  messagingSenderId: "538691737288"
};
firebase.initializeApp(config);

export const db = firebase.database();
