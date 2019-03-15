import './style';
import { h } from 'preact';
import Home from './components/home';
import firebase from 'firebase/app';

const testEnv = {
  apiKey: "AIzaSyDDytMC1XESore84qY2uvSWN3qtYdGZH14",
  authDomain: "riedhammer-chat.firebaseapp.com",
  databaseURL: "https://riedhammer-chat.firebaseio.com",
  projectId: "riedhammer-chat",
  storageBucket: "riedhammer-chat.appspot.com",
  messagingSenderId: "180640408425"
};

firebase.initializeApp(testEnv);

export default () => (
	<div id="root">
    <Home />
	</div>
);
