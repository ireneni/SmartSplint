import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const uploadImage = async (imageUri, scanType) => {
  try {
    // Retrieve session data
    const sessionDataString = await AsyncStorage.getItem("currentSession");
    if (!sessionDataString) {
      console.error("No active session found.");
      return;
    }

    const { sessionId, userId, hand, finger } = JSON.parse(sessionDataString);

    // Construct structured file path: "scans/{userId}/{sessionId}/index_front.png"
    const fileName = `${sessionId}_${finger}_${scanType}.png`; // e.g., "index_front.png"
    const storagePath = `scans/${userId}/${sessionId}/${fileName}`;

    // Convert image to Blob
    const response = await fetch(imageUri);
    const blob = await response.blob();
    
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, blob);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log(`Uploaded: ${fileName} to ${storagePath}`);
    console.log("Download URL:", downloadURL);

    return downloadURL;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
