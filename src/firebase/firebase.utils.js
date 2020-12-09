import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //auth

const config = {
  apiKey: "AIzaSyD_WNnTCH3LrS1uy3MwAyZIMXkqstpctMQ",
  authDomain: "crwn-db-e8c27.firebaseapp.com",
  projectId: "crwn-db-e8c27",
  storageBucket: "crwn-db-e8c27.appspot.com",
  messagingSenderId: "215871979029",
  appId: "1:215871979029:web:b16b15a0e6eeac3fb1d81c",
  measurementId: "G-GF92PR702V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return; //return false if user not authen 

  const userRef = firestore.doc(`users/${userAuth.uid}`); //fetch userAuth from firebase 'users' collection

  const snapShot = await userRef.get(); //return user infomation from userRef by snapShot

  if(!snapShot.exists) {
    const { displayName, email } = userAuth; //assign displayName and email from userAuth object
    const createdAt = new Date();

    try {
      await userRef.set({ //await is to wait until set() is completed. (this function is to store data to firestore) 
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;