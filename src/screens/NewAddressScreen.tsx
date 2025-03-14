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

type NewAddressScreenProps = {
  navigation: any;
};

const NewAddressScreen: React.FC = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleConfirmAddress = () => {
    console.log(
      `Address: ${address}, City: ${city}, PostalCode: ${postalCode}`
    );
    navigation.navigate("OrderKit");
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="New Address" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          <GlobalInput
            label="Address"
            value={address}
            onChangeText={setAddress}
          />
          <GlobalInput label="City" value={city} onChangeText={setCity} />
          <GlobalInput
            label="Postal Code"
            value={postalCode}
            onChangeText={setPostalCode}
          />
        </View>

        {/* Button pinned at the bottom */}
        <View style={GlobalStyles.buttonContainer}>
          <GlobalButton
            title="Confirm Address"
            variant="primary"
            onPress={handleConfirmAddress}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between", // Pushes input fields up and keeps button at the bottom
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
