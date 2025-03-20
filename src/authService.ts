// src/services/authService.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

// Sign Up (basic authentication without address details)
export async function signUp(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// Sign In
export async function signIn(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// Sign Out
export async function signOutUser() {
  await signOut(auth);
}

// Optional: Update the primary address (if you want to store a default address)
// This updates the user document in the "users" collection.
export async function updateUserPrimaryAddress(
  address: string,
  city: string,
  postalCode: string
) {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No user is currently logged in.");
  }

  await setDoc(
    doc(db, "users", currentUser.uid),
    { address, city, postalCode },
    { merge: true } // Merge to avoid overwriting other fields
  );
}
