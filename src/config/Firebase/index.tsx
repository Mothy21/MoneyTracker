// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC95d7QFz_iIBHZnNk8XOWY33GbkkBjRBM',
  authDomain: 'finalprojek-5dcab.firebaseapp.com',
  projectId: 'finalprojek-5dcab',
  storageBucket: 'finalprojek-5dcab.appspot.com',
  messagingSenderId: '563287638290',
  appId: '1:563287638290:web:434a281bb1dd86fe29f3cb',
  databaseURL: 'https://finalprojek-5dcab-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
