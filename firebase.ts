import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJV5n_L0UYh7YeVkj_VUgZFBSn49Jtd70",
  authDomain: "chatgpt-messenger-139da.firebaseapp.com",
  projectId: "chatgpt-messenger-139da",
  storageBucket: "chatgpt-messenger-139da.appspot.com",
  messagingSenderId: "248457303654",
  appId: "1:248457303654:web:2a759904e977ca000ebfa7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
