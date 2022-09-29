import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1nAA0CLJ6asx4P1UDfsvRtVGzd8fZ7Ek',
  authDomain: 'react-app-64278.firebaseapp.com',
  projectId: 'react-app-64278',
  storageBucket: 'react-app-64278.appspot.com',
  messagingSenderId: '973527482066',
  appId: '1:973527482066:web:7cacba647ac7cfdfd9b70b',
  measurementId: 'G-BMJZKWR5BZ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
