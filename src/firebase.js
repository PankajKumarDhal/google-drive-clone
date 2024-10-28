// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXGhJMG1ViOiBiOsRL2wAXfu_889RDHtQ",
    authDomain: "drive-clone-8d3af.firebaseapp.com",
    projectId: "drive-clone-8d3af",
    storageBucket: "drive-clone-8d3af.appspot.com",
    messagingSenderId: "689407781544",
    appId: "1:689407781544:web:35e16799e0e8fe700cb09d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Export the services
export { db, storage, auth, provider };
