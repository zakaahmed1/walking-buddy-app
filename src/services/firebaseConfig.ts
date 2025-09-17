// src/services/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvDjqOoEIBb64TuNft-EEYREM8M-Ycw1M',
  authDomain: 'walking-buddy-app.firebaseapp.com',
  projectId: 'walking-buddy-app',
  storageBucket: 'walking-buddy-app.firebasestorage.app',
  messagingSenderId: '412825105896',
  appId: '1:412825105896:web:17b7b1a71b829f6d1c605d',
  measurementId: 'G-69F0TRB324'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
