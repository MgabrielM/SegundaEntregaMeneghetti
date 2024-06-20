
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALqCuKWvEl0fU29gaB9gKmJlIwOYs-lH0",
  authDomain: "react-js-2be51.firebaseapp.com",
  projectId: "react-js-2be51",
  storageBucket: "react-js-2be51.appspot.com",
  messagingSenderId: "530552828549",
  appId: "1:530552828549:web:44481f650dbf14f409efec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);