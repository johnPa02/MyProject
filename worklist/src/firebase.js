import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDq8De6EwhZwM7MXvwL4VB7JWgPfaQbPzY",
    authDomain: "pro-worklist-995e2.firebaseapp.com",
    databaseURL: "https://pro-worklist-995e2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pro-worklist-995e2",
    storageBucket: "pro-worklist-995e2.appspot.com",
    messagingSenderId: "25389360297",
    appId: "1:25389360297:web:1676b67181879dc047b5b8"
  };

firebase.initializeApp(firebaseConfig)

export default firebase