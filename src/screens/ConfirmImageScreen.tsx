import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CameraCapturedPicture } from "expo-camera";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import { uploadImage } from "../utils/uploadImage";
import colors from "../theme/colors";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleRetake = () => {
    console.log("Retake Image");
    navigation.goBack();
  };

  const handleConfirm = async () => {
    console.log("Confirm Image");
    if (!photo?.uri) return;

    setIsLoading(true);

    try {
      console.log("Uploading image...");
      await uploadImage(photo.uri, scanType);
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsLoading(false);
      return;
    }

    if (scanType === "front") {
      navigation.replace("SideScanTutorial", { finger, hand });
    } else {
      navigation.replace("ImageConfirmed", { photo, finger, hand });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Show loading indicator if uploading */}
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={colors.blue.light20} />
        </View>
      ) : (
        <>
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
            <GlobalButton
              title="Retake Image"
              variant="destructive"
              onPress={handleRetake}
            />
            <GlobalButton
              title="Confirm"
              variant="primary"
              onPress={handleConfirm}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ConfirmImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
