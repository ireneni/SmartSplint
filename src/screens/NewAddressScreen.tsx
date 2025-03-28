import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalInput from "../components/GlobalInput";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import { addUserAddress } from "../addressService"; // Import your address service

type NewAddressScreenProps = {
  navigation: any;
};

const NewAddressScreen: React.FC<NewAddressScreenProps> = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleConfirmAddress = async () => {
    // Optionally validate inputs here before attempting to save
    if (!address || !city || !postalCode) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const newAddressId = await addUserAddress(address, city, postalCode);
      console.log(`Address added with id: ${newAddressId}`);
      // Navigate to the next screen after successful addition
      navigation.navigate("OrderKit");
    } catch (error: any) {
      console.error("Error adding address:", error);
      Alert.alert("Error", error.message || "Failed to add address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="New Address" onBackPress={handleBackPress} />

      <View style={styles.wrapper}>
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
            title={loading ? "Saving..." : "Confirm Address"}
            variant="primary"
            onPress={handleConfirmAddress}
            disabled={loading}
          />
        </View>
      </View>
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
