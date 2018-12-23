import app from 'firebase/app';
import 'firebase/auth';
import { Component } from 'react';
const config = {
  apiKey: 'AIzaSyC6yzgyySXQS8_Yt5d3OnRrQ1qSp3-45lA',
  authDomain: 'wego-web.firebaseapp.com',
  databaseURL: 'https://wego-web.firebaseio.com',
  projectId: 'wego-web',
  storageBucket: 'wego-web.appspot.com',
  messagingSenderId: '525979886362',
};
class Firebase {
  constructor () {
    app.initializeApp (config);
    this.auth = app.auth ();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword (email, password);
  };
  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword (email, password);
  };
  doSignOut = () => {
    this.auth.signOut ();
  };
  doPasswordReset = (email) => {
    this.auth.sendPasswordResetEmail (email);
  }

  doPasswordUpdate = (password) =>{
    this.auth.currentUser.updatePassword(password);
  }
   
}
export default Firebase;
