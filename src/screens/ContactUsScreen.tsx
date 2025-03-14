import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";
type ContactUsScreenProps = {
  navigation: any;
};
const ContactUsScreen: React.FC = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleSendMessage = () => {
    console.log(
      `Sending message:\nName=${name}\nEmail=${email}\nMessage=${message}`
    );
    // TODO: Implement actual sending logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Contact Us" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Use ScrollView so content can scroll if it's taller than the screen */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Subtitle / Description */}
          <Text style={[GlobalStyles.bodyText, styles.subtitle]}>
            Send us a message, and we’ll get back to you soon.
          </Text>

          {/* Name Input */}
          <GlobalInput label="Name" value={name} onChangeText={setName} />

          {/* Email Input */}
          <GlobalInput
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Message Input */}
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Type your message here..."
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
        </ScrollView>

        {/* Button pinned 40px from the bottom */}
        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Send Message"
            variant="primary"
            onPress={handleSendMessage}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

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
    paddingBottom: 100,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 50,
  },
  textArea: {
    // Increase the height for a multiline input
    height: 250,
  },
});
