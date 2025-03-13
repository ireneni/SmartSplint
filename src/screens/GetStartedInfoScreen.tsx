import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
// If you have a colors.ts file with a "blue.light30" or similar, import it here:
import colors from "../theme/colors";

type GetStartedInfoScreenProps = {
  navigation: any; // or use a more specific type from React Navigation
};
const GetStartedInfoScreen: React.FC = ({ navigation }) => {
  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleContinue = () => {
    console.log("Continue button pressed");
    navigation.navigate("Signup");
    // Navigate to the next screen or perform your logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Optional GlobalHeader if needed */}
      <GlobalHeader title="" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Title */}
          <Text style={[GlobalStyles.heading, styles.title]}>
            Welcome to{" "}
            <Text style={styles.highlightText}>SmartSplint</Text>
          </Text>

          {/* Subtitle */}
          <Text style={[GlobalStyles.bodyText, styles.subtitle]}>
            {"Skip the uncomfortable splints.\nStart your SmartSplint journey."}
          </Text>

          {/* Step 1 */}
          <View style={styles.stepCard}>
            <Text style={[GlobalStyles.subheading, styles.stepTitle]}>
              1. Order your scanning kit
            </Text>
            <Text style={[GlobalStyles.bodyText, styles.stepBody]}>
              Receive the tools needed for scanning.
            </Text>
          </View>

          {/* Step 2 */}
          <View style={styles.stepCard}>
            <Text style={[GlobalStyles.subheading, styles.stepTitle]}>
              2. Set it up
            </Text>
            <Text style={[GlobalStyles.bodyText, styles.stepBody]}>
              Set up the kit as instructed.
            </Text>
          </View>

          {/* Step 3 */}
          <View style={styles.stepCard}>
            <Text style={[GlobalStyles.subheading, styles.stepTitle]}>
              3. Scan!
            </Text>
            <Text style={[GlobalStyles.bodyText, styles.stepBody]}>
              Follow the app and take a photo with flash.
            </Text>
          </View>

          {/* Final Note */}
          <Text style={[GlobalStyles.bodyText, styles.finalNote]}>
            Wait for your perfect splint!
          </Text>
        </ScrollView>

        {/* Pinned Button (40px from the bottom) */}
        <View style={styles.buttonContainer}>
          <GlobalButton
            title="Continue"
            variant="primary"
            onPress={handleContinue}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default GetStartedInfoScreen;

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
    paddingTop: 24,
    paddingBottom: 120, // Ensures the last text isn't obscured by the pinned button
  },
  title: {
    textAlign: "center",
    marginBottom: 8,

  },
  highlightText: {
    color: colors.blue.light30, // Use your secondary blue color
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  stepCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    // If you want a subtle shadow on iOS/Android:
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     elevation: 2,
  },
  stepTitle: {
    marginBottom: 4,
  },
  stepBody: {
    // If needed, adjust line height or text styling
  },
  finalNote: {
    textAlign: "center",
    //marginTop: 16,
    marginBottom: 24,
    //paddingVertical: 24,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 24,
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
