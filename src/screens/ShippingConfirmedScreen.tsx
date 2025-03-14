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

type ShippingConfirmedScreenProps = {
  navigation: any;
};

const shippingIcon = require("../assets/tracking.png");

const ShippingConfirmedScreen: React.FC = ({ navigation }) => {
  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleHomePress = () => {
    console.log("Home button pressed");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Global Header */}
      <GlobalHeader title="Shipping Confirmed" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Shipping Icon */}
          <Image source={shippingIcon} style={styles.shippingIcon} />
          {/* Thank You Text */}
          <Text style={[GlobalStyles.heading, styles.thankYouText]}>
            Thank you!
          </Text>
          {/* Message Text */}
          <Text style={[GlobalStyles.bodyText, styles.messageText]}>
            Your scanning kit is on its way.
          </Text>
        </View>

        {/* Pinned Button (40px from bottom) */}
        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Home"
            variant="primary"
            onPress={handleHomePress}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ShippingConfirmedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  shippingIcon: {
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
