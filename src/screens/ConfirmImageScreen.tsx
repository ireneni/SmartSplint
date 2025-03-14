import React from "react";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import { useNavigation } from "@react-navigation/native";
import { CameraCapturedPicture } from "expo-camera";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";

type ConfirmImageScreenProps = {
  photo: CameraCapturedPicture;
  handleRetake: () => void;
};

const ConfirmImageScreen: React.FC<ConfirmImageScreenProps> = ({
  photo,
  handleRetake,
}) => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    console.log("Confirm Image");
    navigation.navigate("ImageConfirmed", { photo });
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
