import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
	authDomain: 'gazua-5848c.firebaseapp.com',
	projectId: 'gazua-5848c',
	storageBucket: 'gazua-5848c.appspot.com',
	messagingSenderId: '836930367027',
	appId: '1:836930367027:web:d3984dbf387bfcfc28bd46',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

export default firebase;
