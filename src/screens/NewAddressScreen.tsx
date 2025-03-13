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

type NewAddressScreenProps = {
  navigation: any;
};
const NewAddressScreen: React.FC = ({navigation}) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleConfirmAddress = () => {
    console.log(`Address: ${address}, City: ${city}, PostalCode: ${postalCode}`);
    navigation.navigate("OrderKit");
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="New Address" onBackPress={handleBackPress} />

      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* ScrollView so content can scroll on smaller screens */}
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <GlobalInput
            label="Address"
            value={address}
            onChangeText={setAddress}
          />

          <GlobalInput
            label="City"
            value={city}
            onChangeText={setCity}
          />

          <GlobalInput
            label="Postal Code"
            value={postalCode}
            onChangeText={setPostalCode}
          />
        </ScrollView>

        {/* Button pinned 40px from bottom */}
        <View style={styles.buttonContainer}>
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
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 120, // Ensures last field isn't obscured by the pinned button
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
