import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBtEDjIg9w-kVbufKAVF0IAdu-FPoOthZw",
  authDomain: "linkedin-react-34cc2.firebaseapp.com",
  projectId: "linkedin-react-34cc2",
  storageBucket: "linkedin-react-34cc2.appspot.com",
  messagingSenderId: "1011476316075",
  appId: "1:1011476316075:web:3993cc22fafaccbf291cee",
  measurementId: "G-2J9JBG91PT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();
const storage  = firebase.storage();


export  default { auth, provider, storage };
export default db;