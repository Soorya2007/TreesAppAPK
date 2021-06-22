import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAHFIKIx2yE1JuJTdksVQnUAMSOTjp9DX4",
    authDomain: "forestconservation-e575a.firebaseapp.com",
    projectId: "forestconservation-e575a",
    storageBucket: "forestconservation-e575a.appspot.com",
    messagingSenderId: "1020162130871",
    appId: "1:1020162130871:web:248b9b64ad1d2340ea5e32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();