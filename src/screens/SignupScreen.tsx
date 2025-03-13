import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";

type CreateAccountScreenProps = {
  navigation: any; // or use a more specific type from React Navigation
};
const CreateAccountScreen: React.FC = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleCreateAccount = () => {
    console.log(
      `Creating account with:\nFull Name=${fullName}\nEmail=${email}\nPassword=${password}\nAddress=${address}\nCity=${city}\nPostalCode=${postalCode}`
    );
    navigation.navigate("Home")
    // TODO: Implement actual account creation logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Create an Account" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* ScrollView so content can scroll on smaller screens */}
        <ScrollView contentContainerStyle={styles.scrollContent}>

          {/* Full Name */}
          <GlobalInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* Email */}
          <GlobalInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password */}
          <GlobalInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Address */}
          <GlobalInput
            label="Address"
            value={address}
            onChangeText={setAddress}
          />

          {/* City */}
          <GlobalInput
            label="City"
            value={city}
            onChangeText={setCity}
          />

          {/* Postal Code */}
          <GlobalInput
            label="Postal Code"
            value={postalCode}
            onChangeText={setPostalCode}
          />
        </ScrollView>

        {/* Pinned button 40px from the bottom */}
        <View style={styles.buttonContainer}>
          <GlobalButton
            title="Create Account"
            variant="primary"
            onPress={handleCreateAccount}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;

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
    paddingBottom: 120, // ensures last field isn't obscured by the pinned button
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    //position: "absolute",
    width: "100%",
    paddingHorizontal: 24,
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
