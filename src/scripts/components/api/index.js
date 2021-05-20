import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

class API {
  constructor (config) {
    firebase.initializeApp(config);
    this._firestore = firebase.firestore();
    this._firestore.settings({
      timestampsInSnapshots: true
    });
  }

  getAboutInfo () {
    return new Promise(resolve => {
      this._firestore.collection('aboutMe').get()
        .then(snapshot => {
          const data = {};

          snapshot.docs.forEach(doc => {
            Object.assign(data, doc.data())
          });

          resolve(data);
        })
    })
  }

  getProjects () {
    return new Promise(resolve => {
      this._firestore.collection('projects').get()
        .then(snapshot => {
          const data = {};

          snapshot.docs.forEach(doc => {
            Object.assign(data, doc.data())
          });

          resolve(data);
        })
    })
  }
}

const apiFirebase = new API(config);
export default apiFirebase;
