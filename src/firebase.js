import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGz1-UnFAdbDZpHrXnJ5iC7G2ushYLgPU",
  authDomain: "ecommerce-ad821.firebaseapp.com",
  projectId: "ecommerce-ad821",
  storageBucket: "ecommerce-ad821.appspot.com",
  messagingSenderId: "424201721476",
  appId: "1:424201721476:web:d2d71e0766c37780df54d1"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;