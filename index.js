import './style';
import { h } from 'preact';
import Home from './components/home';
import firebase from 'firebase/app';

const testEnv = {
  apiKey: "AIzaSyBF68tgHAcIgQ9nR0K66PsGIO1CbkFW_wE",
  authDomain: "chat-acbfc.firebaseapp.com",
  databaseURL: "https://chat-acbfc.firebaseio.com",
  projectId: "chat-acbfc",
  storageBucket: "chat-acbfc.appspot.com",
  messagingSenderId: "87406616944"
};

firebase.initializeApp(testEnv);

export default () => (
	<div id="root">
    <Home />
	</div>
);
