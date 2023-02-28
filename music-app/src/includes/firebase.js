import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    
    apiKey: "AIzaSyDCOr0yl-odGN21OIWdx72srmmX20BvzpQ",
    authDomain: "music-app-5c477.firebaseapp.com",
    projectId: "music-app-5c477",
    storageBucket: "music-app-5c477.appspot.com",
    appId: "1:463975758601:web:689b6fd3bd734e115c71d8",
    measurementId: "G-M2PPJ6G8W4"

  };

 export default firebase.initializeApp(firebaseConfig);
  
  