import auth from '@react-native-firebase/auth';
import firebaseFirestore from '@react-native-firebase/firestore';

const firestore = firebaseFirestore();

const timeStamp = firebaseFirestore.FieldValue.serverTimestamp();

export { auth, firestore, timeStamp };
