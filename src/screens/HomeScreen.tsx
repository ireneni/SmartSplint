import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalInput from "../components/GlobalInput";
import GlobalStyles from "../styles/GlobalStyles";

type HomeScreenProps = {
  navigation: any;
};

const scannerKitImage = require("../assets/scanner-kit.jpg");

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activationCode, setActivationCode] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleOrderKit = () => {
    console.log("Order Kit button pressed");
    navigation.navigate("OrderKit");
  };

  const handleSubmitCode = () => {
    if (activationCode.length === 5) {
      console.log(`Activating kit with code: ${activationCode}`);
      navigation.navigate("HandSelection");
    } else {
      console.log("Activation code must be 5 characters.");
      // Optionally, show an alert here
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Home" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          {/* Scanner Kit Image */}
          <Image source={scannerKitImage} style={styles.scannerImage} />

          {/* Activation Section */}
          <Text style={[GlobalStyles.subheading, styles.activateLabel]}>
            Activate Your Kit
          </Text>
          <GlobalInput
            label="Activation Code"
            value={activationCode}
            onChangeText={setActivationCode}
            onSubmitEditing={handleSubmitCode}
            returnKeyType="done"
            style={styles.input}
          />
        </View>
        {/* Order Kit Button */}
        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Order Kit"
            variant="primary"
            onPress={handleOrderKit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flexGrow: 1, // Ensures content fills available space
    marginTop: 40,
    paddingHorizontal: 24,
  },
  scannerImage: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginBottom: 24,
  },
  activateLabel: {
    textAlign: "center",
  },
});
