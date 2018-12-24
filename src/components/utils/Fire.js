import firebase from 'firebase/app';
import 'firebase/auth'
const config = {
  apiKey: 'AIzaSyC6yzgyySXQS8_Yt5d3OnRrQ1qSp3-45lA',
  authDomain: 'wego-web.firebaseapp.com',
  databaseURL: 'https://wego-web.firebaseio.com',
  projectId: 'wego-web',
  storageBucket: 'wego-web.appspot.com',
  messagingSenderId: '525979886362',
};
const fire = firebase.initializeApp(config)
export default fire;