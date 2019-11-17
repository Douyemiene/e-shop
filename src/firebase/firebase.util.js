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


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

export const addCollectionAndDocument = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef)
    const batch = firestore.batch
    objectsToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    batch.commit()
}
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return{
            routeName :  encodeURI(title.toLowerCase()),
            id: doc.id,
            title, 
            items
        }
    })

    transformedCollection.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();