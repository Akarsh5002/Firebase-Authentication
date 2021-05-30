import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD9psgSI5lJuJQ_oqVUWK1rjeWkaSMRqzA",
    authDomain: "prototype1-ace9b.firebaseapp.com",
    projectId: "prototype1-ace9b",
    storageBucket: "prototype1-ace9b.appspot.com",
    messagingSenderId: "282692964129",
    appId: "1:282692964129:web:50977f9a6c3f26fc963860"
  };
  // Initialize Firebase
  if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();