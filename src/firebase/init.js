import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCq1CTL_ndSj8kD-yRZ-9meULYfJEf1fBc",
  authDomain: "ninja-smoothies-2f37a.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-2f37a.firebaseio.com",
  projectId: "ninja-smoothies-2f37a",
  storageBucket: "ninja-smoothies-2f37a.appspot.com",
  messagingSenderId: "549878727749",
  appId: "1:549878727749:web:55a2fa3dcdfc5202874f2c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()
