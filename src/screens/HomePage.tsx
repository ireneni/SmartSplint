import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../theme/colors";

const HandSelectionScreen = () => {
  const handleLeftHandPress = () => {
    console.log("Left hand pressed");
  };

  const handleRightHandPress = () => {
    console.log("Right hand pressed");
  };

  const handleContactUsPress = () => {
    console.log("Contact Us pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        {/* App name in blue */}
        <Text style={[GlobalStyles.heading, styles.appTitle]}>SmartSplint</Text>

        {/* Welcome message */}
        <Text style={[GlobalStyles.heading, styles.welcomeText]}>
          Welcome back, Brenda!
        </Text>

        {/* Instruction */}
        <Text style={[GlobalStyles.bodyText, styles.instructionText]}>
          Select which hand to scan
        </Text>
      </View>

      {/* Middle Section: Hand buttons */}
      <View style={styles.handRow}>
        <TouchableOpacity
          style={[
            GlobalStyles.buttonLarge,
            GlobalStyles.buttonPrimary,
            styles.handButton,
          ]}
          onPress={handleLeftHandPress}
        >
          <Ionicons
            style={styles.handImage}
            name="hand-left"
            size={80}
            color="white"
          />
          <Text style={GlobalStyles.buttonText}>Left</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            GlobalStyles.buttonLarge,
            GlobalStyles.buttonPrimary,
            styles.handButton,
          ]}
          onPress={handleRightHandPress}
        >
          <Ionicons
            style={styles.handImage}
            name="hand-right"
            size={80}
            color="white"
          />
          <Text style={GlobalStyles.buttonText}>Right</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section: Contact Us button */}
      <View style={styles.bottomContainer}>
        <GlobalButton
          title="Contact Us"
          variant="secondary"
          onPress={handleContactUsPress}
          // If you want black text, override here:
          // textStyle={{ color: '#000' }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Full white background, no radius, no card
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Top Section
  topContainer: {
    alignItems: "center",
    marginTop: 20, // Adjust as needed
  },
  appTitle: {
    color: colors.blue.light20, // Blue text for the title
  },
  welcomeText: {
    color: "#000",
    marginTop: 60,
    textAlign: "center",
  },
  instructionText: {
    color: "#000",
    marginTop: 40,
  },

  // Middle Section: Hand buttons
  handRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2, // Adjust spacing as needed
  },
  handButton: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  handImage: {
    marginBottom: 12,
  },
  // Bottom Section
  bottomContainer: {
    marginTop: "auto", // Push this to the bottom
    marginBottom: 40, // Adjust spacing from bottom
    alignItems: "center",
    paddingHorizontal: 24,
  },
});

export default HandSelectionScreen;
