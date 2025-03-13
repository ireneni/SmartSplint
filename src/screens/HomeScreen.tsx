import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Scanner Kit Image */}
          <Image source={scannerKitImage} style={styles.scannerImage} />

          {/* Order Kit Button */}
          <View style={styles.buttonWrapper}>
            <GlobalButton
              title="Order Kit"
              variant="primary"
              onPress={handleOrderKit}
            />
          </View>

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
          />
        </ScrollView>
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
  scrollContent: {
    paddingHorizontal: 24,
    marginTop: 54,
    paddingBottom: 120, // extra bottom padding so input isn't blocked by the keyboard
  },
  scannerImage: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginBottom: 24,
  },
  buttonWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  activateLabel: {
    textAlign: "center",
    marginBottom: 12,
  },
});
