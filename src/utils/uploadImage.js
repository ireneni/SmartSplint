import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

export const uploadImage = async (imageUri) => {
  try {
    // Convert image to a Blob
    const response = await fetch(imageUri);
    const blob = await response.blob();

    // Generate a unique filename
    const fileName = `scans/${Date.now()}.jpg`;
    const storageRef = ref(storage, fileName);

    // Upload image
    await uploadBytes(storageRef, blob);
    console.log("Image uploaded:", fileName);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Download URL:", downloadURL);

    return downloadURL; // If needed for further use
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
