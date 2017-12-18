import firebase from 'firebase'
import firestore from 'firebase/firestore'

export const firebaseInstance = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyBn5i2ddGFQ7P9oUeiLoQizKi0IkqaRQgA',
      authDomain: 'offline-demo-app.firebaseapp.com',
      projectId: 'offline-demo-app'
    })
    persistedDB().then(() => {
      console.log('Enable Firestore data Offline')
    })
  }
  return firebase
}

export const persistedDB = () => {
  return firebaseInstance().firestore().enablePersistence()
  // return firebaseInstance().firestore()
}

export const db = () => {
  return firebaseInstance().firestore()
}
