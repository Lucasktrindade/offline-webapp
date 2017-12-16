import firebase from 'firebase'
import firestore from 'firebase/firestore'

export default class FirebaseService {
  constructor () {
    this.vuefire = firebase.initializeApp({
      apiKey: 'AIzaSyBn5i2ddGFQ7P9oUeiLoQizKi0IkqaRQgA',
      authDomain: 'offline-demo-app.firebaseapp.com',
      projectId: 'offline-demo-app'
    })
    console.log(firestore)
    this.db = firebase.firestore()
  }

  getFirestore () {
    return this.db
  }
}
