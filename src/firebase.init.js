import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: "darkfam-virtual-dairy",
  storageBucket: process.env.REACT_APP_STORAGEBUCKET, 
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: "1:771090903302:web:f626f698990a0f8c352e87",
  measurementId: process.env.REACT_APP_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;