import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANOKWLfznfkRbJky6F4X3e-una5xB2h1g",
  authDomain: "contactapp-ec079.firebaseapp.com",
  projectId: "contactapp-ec079",
  storageBucket: "contactapp-ec079.appspot.com",
  messagingSenderId: "477834477220",
  appId: "1:477834477220:web:b39651d98bfa9f6f5ab031",
  measurementId: "G-WHFCYPDS82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//database
export const db = getFirestore(app);