import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CameraCapturedPicture } from "expo-camera";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import { uploadImage } from "../utils/uploadImage";

type ConfirmImageScreenRouteParams = {
  photo: CameraCapturedPicture;
  finger: string;
  hand: string;
  scanType: "front" | "side";
};

const ConfirmImageScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { photo, finger, hand, scanType } =
    route.params as ConfirmImageScreenRouteParams;

  const handleRetake = () => {
    console.log("Retake Image");
    // Simply pop the current screen, triggering a backward animation
    navigation.goBack();
  };

  const handleConfirm = () => {
    console.log("Confirm Image");
    if (!photo?.uri) return;
    
    try {
      console.log("Uploading image...");
      await uploadImage(photo.uri);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    if (scanType === "front") {
      // After confirming a front scan, move forward to the side scan tutorial
      navigation.navigate("SideScanTutorial", { finger, hand });
    } else {
      // After confirming a side scan, move forward to the final image confirmed screen
      navigation.navigate("ImageConfirmed", { photo, finger, hand });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Confirm Image" onBackPress={handleRetake} />
      {/* Display the captured image */}
      <View style={styles.imageWrapper}>
        <Image
          source={
            photo?.uri
              ? { uri: photo.uri }
              : require("../assets/confirm-placeholder.png")
          }
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Retake and Confirm Buttons */}
      <View style={GlobalStyles.buttonContainer}>
        <GlobalButton title="Retake Image" variant="destructive" onPress={handleRetake} />
        <GlobalButton title="Confirm" variant="primary" onPress={handleConfirm} />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imageWrapper: {
    marginTop: 24,
    width: "72%",
    height: "54%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
