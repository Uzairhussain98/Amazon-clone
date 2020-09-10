import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwuZjAYRjHhgPlSiy8yIETbastBE1LC4Q",
    authDomain: "clone-d68ad.firebaseapp.com",
    databaseURL: "https://clone-d68ad.firebaseio.com",
    projectId: "clone-d68ad",
    storageBucket: "clone-d68ad.appspot.com",
    messagingSenderId: "728689396174",
    appId: "1:728689396174:web:c5ba50be9b6263c7ad039f",
    measurementId: "G-H93BNNFBRD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };