// src/services/addressService.ts
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

// Adds a new address document to the user's "addresses" subcollection
export async function addUserAddress(
  address: string,
  city: string,
  postalCode: string
) {
  console.log("Starting to add user address...");
  const currentUser = auth.currentUser;
  if (!currentUser) {
    console.error("No user is currently logged in.");
    throw new Error("No user is currently logged in.");
  }

  try {
    // Reference to the user's "addresses" subcollection
    const addressesRef = collection(db, "users", currentUser.uid, "addresses");
    const newAddress = {
      address,
      city,
      postalCode,
      createdAt: new Date(),
    };
    console.log("Adding document:", newAddress);
    const docRef = await addDoc(addressesRef, newAddress);
    console.log("Document added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding address:", error);
    throw error;
  }
}
