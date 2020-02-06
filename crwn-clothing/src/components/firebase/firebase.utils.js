import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA-oU4VrWFQectRHzNMvKY7LY85U-77pgo",
    authDomain: "crwn-db-8f22f.firebaseapp.com",
    databaseURL: "https://crwn-db-8f22f.firebaseio.com",
    projectId: "crwn-db-8f22f",
    storageBucket: "crwn-db-8f22f.appspot.com",
    messagingSenderId: "471877968371",
    appId: "1:471877968371:web:58eef69035bb596b113286",
    measurementId: "G-KLZ4NPTWZG"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;