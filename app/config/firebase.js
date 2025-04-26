// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJU9bu5dlXMFS6fEDaboxuTrEBTbF5nbc",
  authDomain: "authfor-2a88e.firebaseapp.com",
  projectId: "authfor-2a88e",
  storageBucket: "authfor-2a88e.appspot.com",
  messagingSenderId: "742663621413",
  appId: "1:742663621413:web:2546f841d94c47632428cc",
  measurementId: "G-MVYHB7DPQX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
