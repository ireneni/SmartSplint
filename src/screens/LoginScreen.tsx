import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import GlobalInput from "../components/GlobalInput";
import GlobalHeader from "../components/GlobalHeader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Ensure this path is correct

type LoginScreenProps = {
  navigation: any; // You can use proper types from React Navigation if desired
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleSignIn = async () => {
    console.log(`Signing in with email=${email}, password=${password}`);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user.email);
      // Navigate to Home screen after successful login
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Error signing in:", error.code, error.message);
      // Display an alert to the user if authentication fails
      Alert.alert("Login Failed", error.message || "An error occurred during login.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <GlobalHeader title="Welcome Back" onBackPress={handleBackPress} />

      {/* Top image / header */}
      <View style={styles.headerImageContainer}>
        <Image
          source={require("../assets/login-hands.jpg")}
          style={styles.headerImage}
        />
      </View>

      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Email Input (GlobalInput) */}
        <GlobalInput
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input (GlobalInput) */}
        <GlobalInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot password link */}
        <TouchableOpacity onPress={() => console.log("Forgot password pressed")}>
          <Text style={[GlobalStyles.linkText, styles.forgotPasswordText]}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Centered Button */}
        <View style={styles.buttonContainer}>
          <GlobalButton
            title="Sign in"
            variant="primary"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImageContainer: {
    height: 240,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  forgotPasswordText: {
    textAlign: "right",
    marginBottom: 24,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
});
