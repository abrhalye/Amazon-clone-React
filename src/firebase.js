import firebase from 'firebase'

//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8pq8bywd681RxZEQThZY5bjuDpNWNjWM",
    authDomain: "clone-d5edd.firebaseapp.com",
    projectId: "clone-d5edd",
    storageBucket: "clone-d5edd.appspot.com",
    messagingSenderId: "120502220461",
    appId: "1:120502220461:web:380b72e389989fd4033824",
    measurementId: "G-8BK5X0QSJC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
