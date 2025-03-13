import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalStyles from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { CameraCapturedPicture } from "expo-camera";

type ConfirmImageScreenProps = {
  photo: CameraCapturedPicture;
  handleRetake: () => void;
};

const ConfirmImageScreen: React.FC<ConfirmImageScreenProps> = ({ photo, handleRetake }) => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    console.log("Confirm Image");
    // Navigate to the next screen (e.g., ImageConfirmed) and pass the photo as a parameter.
    navigation.navigate("ImageConfirmed", { photo });
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.buttonContainer}>
        <Pressable
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonDestructive]}
          onPress={handleRetake}
        >
          <Text style={GlobalStyles.buttonText}>Retake Image</Text>
        </Pressable>

        <Pressable
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary]}
          onPress={handleConfirm}
        >
          <Text style={GlobalStyles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
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
    width: "80%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 40,
    paddingHorizontal: 24,
  },
});
