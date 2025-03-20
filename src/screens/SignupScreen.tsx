import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Adjust the path as needed

type CreateAccountScreenProps = {
  navigation: any;
};

const CreateAccountScreen: React.FC<CreateAccountScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleCreateAccount = async () => {
    console.log(
      `Creating account with:\nFull Name=${fullName}\nEmail=${email}\nPassword=${password}`
    );
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user.email);
      // After sign-up, navigate to Home (or any protected route)
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Error creating account:", error.code, error.message);
      // Optionally, show an alert or update local error state here
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Create an Account" onBackPress={handleBackPress} />

      <View style={styles.wrapper}>
        <View style={styles.content}>
          <GlobalInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <GlobalInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <GlobalInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Button pinned at the bottom */}
        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Create Account"
            variant="primary"
            onPress={handleCreateAccount}
          />
        </View>
      </View>
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
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
