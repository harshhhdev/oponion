import firebase from 'firebase'
import config from './FirebaseSDK.config'

const FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || config.apiKey,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || config.authDomain,
  databaseURL: process.env.FIREBASE_DATABASE_URL || config.databaseURL,
  projectId: process.env.FIREBASE_PROJECT_ID || config.projectId,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || config.storageBucket,
  messagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID || config.messagingSenderId,
  appId: process.env.FIREBASE_APP_ID || config.appId,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || config.measurementId,
}

!firebase.apps.length ? firebase.initializeApp(FirebaseConfig) : firebase.app()

console.log(FirebaseConfig)

export default firebase
