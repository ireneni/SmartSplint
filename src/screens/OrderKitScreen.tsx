import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

type OrderKitScreenProps = {
  navigation: any;
};

const OrderKitScreen: React.FC<OrderKitScreenProps> = ({ navigation }) => {
  const handleBackPress = () => {
    console.log("Back arrow pressed");
    navigation.goBack();
  };

  const handleConfirmShipping = () => {
    console.log("Confirm shipping pressed");
    navigation.navigate("ShippingConfirmed");
  };

  const handleAddNewAddress = () => {
    console.log("Add new address pressed");
    navigation.navigate("NewAddress");
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Order Kit" onBackPress={handleBackPress} />

      {/* Scrollable area in case we have multiple addresses */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Selected Address Card */}
        <View style={styles.selectedAddressCard}>
          <Text style={styles.addressName}>Rozhan Akrami</Text>
          <Text style={styles.addressLine}>200 University Ave W,</Text>
          <Text style={styles.addressLine}>Waterloo, ON</Text>
          <Text style={styles.addressLine}>N2L 3G5</Text>
        </View>

        {/* Add New Address Card */}
        <Pressable style={styles.addAddressCard} onPress={handleAddNewAddress}>
          <Text style={styles.addAddressText}>Add New Address</Text>
          <Ionicons name="add-circle" size={24} color="#0A2463" />
        </Pressable>
      </ScrollView>

      {/* Pinned button at the bottom */}
      <View style={styles.buttonContainer}>
        <GlobalButton
          title="Confirm Shipping"
          variant="primary"
          onPress={handleConfirmShipping}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderKitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 120, // extra space so content isn't hidden by the button
  },

  /* Selected Address Card */
  selectedAddressCard: {
    borderWidth: 2,
    borderColor: "#0A2463", // or your brand blue
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  addressName: {
    ...GlobalStyles.heading,
    fontSize: 16,
    marginBottom: 4,
  },
  addressLine: {
    ...GlobalStyles.bodyText,
    fontSize: 14,
  },

  /* Add New Address Card */
  addAddressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5F2FF", // or your light blue background
    borderRadius: 8,
    padding: 16,
  },
  addAddressText: {
    ...GlobalStyles.bodyText,
    fontSize: 14,
    color: "#0A2463", // brand color
  },

  /* Button pinned at the bottom */
  buttonContainer: {
    position: "absolute",
    width: "100%",
    paddingHorizontal:24,
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
