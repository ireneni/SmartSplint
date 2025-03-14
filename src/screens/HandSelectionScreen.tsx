import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../theme/colors";

type HandSelectionScreenProps = {
  navigation: any; // You can replace this with a more specific type if desired
};

const HandSelectionScreen: React.FC<HandSelectionScreenProps> = ({
  navigation,
}) => {
  const handleLeftHandPress = () => {
    console.log("Left hand pressed");
    navigation.navigate("FingerSelection", { hand: "Left" });
  };

  const handleRightHandPress = () => {
    console.log("Right hand pressed");
    navigation.navigate("FingerSelection", { hand: "Right" });
  };

  const handleContactUsPress = () => {
    console.log("Contact Us pressed");
    navigation.navigate("ContactUs"); // or your appropriate screen name
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <Text style={[GlobalStyles.heading, styles.appTitle]}>SmartSplint</Text>
        <Text style={[GlobalStyles.heading, styles.welcomeText]}>
          Welcome back, Brenda!
        </Text>
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
            styles.fingerButton,
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
            styles.fingerButton,
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
      <View style={GlobalStyles.buttonContainer}>
        <GlobalButton
          title="Contact Us"
          variant="secondary"
          onPress={handleContactUsPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default HandSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Top Section
  topContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  appTitle: {
    color: colors.blue.light20,
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
    marginTop: 2,
  },
  fingerButton: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  handImage: {
    marginBottom: 12,
  },
});
