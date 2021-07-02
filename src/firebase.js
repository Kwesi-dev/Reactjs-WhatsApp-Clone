import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAbusL29r1Gm1TMWCNBV4EtQnsFLA--e_c",
    authDomain: "whatsapp-clone-9e790.firebaseapp.com",
    projectId: "whatsapp-clone-9e790",
    storageBucket: "whatsapp-clone-9e790.appspot.com",
    messagingSenderId: "366551280058",
    appId: "1:366551280058:web:9dea3d9ded719e517d9583",
    measurementId: "G-5PQK5L0VV5"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db