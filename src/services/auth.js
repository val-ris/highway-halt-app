// Firebase Auth services
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
