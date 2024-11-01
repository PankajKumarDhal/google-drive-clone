import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXGhJMG1ViOiBiOsRL2wAXfu_889RDHtQ",
  authDomain: "drive-clone-8d3af.firebaseapp.com",
  projectId: "drive-clone-8d3af",
  storageBucket: "drive-clone-8d3af.appspot.com",
  messagingSenderId: "689407781544",
  appId: "1:689407781544:web:35e16799e0e8fe700cb09d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);

// Set persistence to local storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Persistence is set
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { auth, provider, db, storage, signInWithPopup }; // Ensure signInWithPopup is exported
