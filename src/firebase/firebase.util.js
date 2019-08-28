import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHsPlKez773zz4zs9YJeJtZSCn1Ss2ihs",
    authDomain: "crwb-db.firebaseapp.com",
    databaseURL: "https://crwb-db.firebaseio.com",
    projectId: "crwb-db",
    storageBucket: "",
    messagingSenderId: "1017837131210",
    appId: "1:1017837131210:web:d0876c4e48256f47"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;