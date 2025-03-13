import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import GlobalInput from "../components/GlobalInput";

type LoginScreenProps = {
  navigation: any; // or use the proper type from React Navigation
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log(`Signing in with email=${email}, password=${password}`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Top image / header */}
      <View style={styles.headerImageContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/400x200" }}
          style={styles.headerImage}
        />
      </View>

      {/* Main content area */}
      <View style={styles.contentContainer}>
        <Text style={GlobalStyles.heading}>Welcome Back</Text>

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
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerImageContainer: {
    height: 200,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#0A2463",
    textAlign: "right",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
});
