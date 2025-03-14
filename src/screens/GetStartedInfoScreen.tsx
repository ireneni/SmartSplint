import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../theme/colors";

type GetStartedInfoScreenProps = {
  navigation: any;
};

const GetStartedInfoScreen: React.FC<GetStartedInfoScreenProps> = ({
  navigation,
}) => {
  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleContinue = () => {
    console.log("Continue button pressed");
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <GlobalHeader title="Welcome" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          {/* Subtitle */}
          <Text style={[GlobalStyles.bodyText, styles.subtitle]}>
            Skip the uncomfortable splints.{"\n"}
            Start your{" "}
            <Text style={[GlobalStyles.subheading, styles.highlightText]}>
              SmartSplint
            </Text>{" "}
            journey.
          </Text>

          {/* Steps */}
          <View style={styles.stepCard}>
            <Text style={[GlobalStyles.subheading, styles.stepTitle]}>
              1. Order your scanning kit
            </Text>
            <Text style={[GlobalStyles.bodyText, styles.stepBody]}>
              Receive the tools needed for scanning.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={[GlobalStyles.subheading, styles.stepTitle]}>
              2. Set it up
            </Text>
            <Text style={[GlobalStyles.bodyText, styles.stepBody]}>
              Set up the kit as instructed.
            </Text>
          </View>

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
        </View>

        {/* Button Container */}
        <View style={GlobalStyles.buttonContainer}>
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
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  highlightText: {
    color: colors.blue.light20,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  stepCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  stepTitle: {
    marginBottom: 4,
  },
  finalNote: {
    textAlign: "center",
  },
});
