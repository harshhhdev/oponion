import firebase from 'firebase'

const FirebaseConfig = {
  databaseURL: '',
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig)
} else {
  firebase.app()
}

export default firebase
