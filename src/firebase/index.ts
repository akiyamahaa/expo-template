import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwqkB68dwEL4gcwnEiKZwEe2IRNjN9xL8",
  authDomain: "medical-reminder-93e72.firebaseapp.com",
  projectId: "medical-reminder-93e72",
  storageBucket: "medical-reminder-93e72.appspot.com",
  messagingSenderId: "762408044033",
  appId: "1:762408044033:web:48e77e95e2b151d50d2200",
  measurementId: "G-B04J772JZE"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase