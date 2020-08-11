import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCZEMjDMXY6Z7yQtniraDqYPwD-KYjItF0",
  authDomain: "crwn-db-e2640.firebaseapp.com",
  databaseURL: "https://crwn-db-e2640.firebaseio.com",
  projectId: "crwn-db-e2640",
  storageBucket: "crwn-db-e2640.appspot.com",
  messagingSenderId: "690616906833",
  appId: "1:690616906833:web:d4ad38fde489ba93363470",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
