// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const login = (): void => {
  const auth = getAuth(app);
  signInWithPopup(auth, provider);
};

export const logout = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });

export const deleteCurrentUser = (): void => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user) {
    deleteUser(user);
  }
};

export type User = {
  displayName: string | null | undefined;
};

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const auth = getAuth(app);

  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo: User | null = user
      ? {
          displayName: user?.displayName,
        }
      : null;
    callback(userInfo);
  });
};
