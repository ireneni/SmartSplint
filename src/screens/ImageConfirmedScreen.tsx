import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";

type ImageConfirmedScreenProps = {
  navigation: any;
};

// Import your PNG image (ensure the path is correct)
const thumbsupIcon = require("../assets/thumbs-up.png");

const ImageConfirmedScreen: React.FC = ({ navigation }) => {
  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleHomePress = () => {
    console.log("Home button pressed");
    navigation.navigate("HandSelection");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Global Header */}
      <GlobalHeader title="Image Confirmed" onBackPress={handleBackPress} />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Thumbs Up Icon */}
        <Image source={thumbsupIcon} style={styles.thumbsupIcon} />
        {/* Thank You Text */}
        <Text style={[GlobalStyles.heading, styles.thankYouText]}>
          Thank you!
        </Text>
        {/* Message Text */}
        <Text style={[GlobalStyles.bodyText, styles.messageText]}>
          We have received your photos.
        </Text>
      </View>

      {/* Home Button */}
      <View style={GlobalStyles.buttonContainer}>
        <GlobalButton
          title="Home"
          variant="primary"
          onPress={handleHomePress}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageConfirmedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  thumbsupIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  thankYouText: {
    textAlign: "center",
    marginBottom: 8,
  },
  messageText: {
    textAlign: "center",
    marginBottom: 40,
    paddingBottom: 40,
  },
});
