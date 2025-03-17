import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  InputAccessoryView,
  Button,
  Platform,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";

const inputAccessoryViewID = "uniqueID";

const ContactUsScreen: React.FC = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    console.log(
      `Sending message:\nName=${name}\nEmail=${email}\nMessage=${message}`
    );
    // TODO: Implement actual sending logic
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <GlobalHeader title="Contact Us" onBackPress={handleBackPress} />

        <View style={styles.content}>
          <Text style={[GlobalStyles.bodyText, styles.subtitle]}>
            Send us a message, and we’ll get back to you soon.
          </Text>

          <GlobalInput label="Name" value={name} onChangeText={setName} />

          <GlobalInput
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Type your message here..."
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            scrollEnabled={true}
            value={message}
            onChangeText={setMessage}
            // Allow new line insertion by keeping blurOnSubmit false
            blurOnSubmit={false}
            // returnKeyType will be ignored on iOS when multiline is true
            returnKeyType="default"
            inputAccessoryViewID={
              Platform.OS === "ios" ? inputAccessoryViewID : undefined
            }
          />
        </View>

        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Send Message"
            variant="primary"
            onPress={handleSendMessage}
          />
        </View>

        {Platform.OS === "ios" && (
          <InputAccessoryView nativeID={inputAccessoryViewID}>
            <View style={styles.accessory}>
              <Button title="Done" onPress={Keyboard.dismiss} />
            </View>
          </InputAccessoryView>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
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
    height: 200,
  },
  accessory: {
    backgroundColor: "#eee",
    padding: 8,
    alignItems: "flex-end",
  },
});
