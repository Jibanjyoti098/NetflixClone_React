// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtP4u7-lgzTQz7D3o1Wk5DNBUTMn4-5X4",
    authDomain: "netflix-clone-8c37f.firebaseapp.com",
    projectId: "netflix-clone-8c37f",
    storageBucket: "netflix-clone-8c37f.firebasestorage.app",
    messagingSenderId: "735042590687",
    appId: "1:735042590687:web:e2a00f4c177a6982d1966a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// !Initialize auth and firestore 
const auth = getAuth(app);
const db = getFirestore(app)

//!Sign up with email  and pass
const signup = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
            authProvider: "local",
        });
        return user;
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

//! User Sign in Function
const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

//! Log out function
const logout = async () => {
    try {
        await signOut(auth);
        toast.success("Logged out successfully");
    } catch (error) {
        toast.error("Logout failed");
    }
};

export { auth, db, login, signup, logout };