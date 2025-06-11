// Order management services
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getOrders = async () => {
  const snapshot = await getDocs(collection(db, 'orders'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
