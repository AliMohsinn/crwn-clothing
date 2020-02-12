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

  export const createUserProfileDocument = async (userAuth,additionalData)=> {
   if(!userAuth) return;   
   
  
   const userRef=firestore.doc(`users/${userAuth.uid}`);
   const snapShot= userRef.get();
   if(!snapShot.exists){
     const {displayName,email}=userAuth; 
     console.log('Inside Create User Profile Document');   
     console.log(email);
     console.log(displayName);
     const createdAt= new Date();
     try{
              
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }
     catch(error){
           
      console.log('error creating user',error.message)

     }
   }

   return userRef;
   
  }



  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;