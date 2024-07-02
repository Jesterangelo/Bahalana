
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRnUfOTHrm_CCj3EHq5r1Im1WnKbEqVQg",
  authDomain: "login1-b26a8.firebaseapp.com",
  projectId: "login1-b26a8",
  storageBucket: "login1-b26a8.appspot.com",
  messagingSenderId: "813377909041",
  appId: "1:813377909041:web:b30ec9067532598a52c010",

  
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;