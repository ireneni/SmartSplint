import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";

type CreateAccountScreenProps = {
  navigation: any;
};

const CreateAccountScreen: React.FC<CreateAccountScreenProps> = ({
  navigation,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleCreateAccount = () => {
    console.log(
      `Creating account with:\nFull Name=${fullName}\nEmail=${email}\nPassword=${password}`
    );
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Create an Account" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
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
    justifyContent: "space-between", // Pushes content up and button down
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
