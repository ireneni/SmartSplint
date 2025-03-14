import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../theme/colors";

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

      <View style={styles.content}>
        {/* Selected Address Card */}
        <View style={styles.selectedAddressCard}>
          <Text style={styles.addressName}>Rozhan Akrami</Text>
          <Text style={styles.addressLine}>200 University Ave W,</Text>
          <Text style={styles.addressLine}>Waterloo, ON</Text>
          <Text style={styles.addressLine}>N2L 3G5</Text>
        </View>

        {/* Add New Address Card */}
        <Pressable style={styles.addAddressCard} onPress={handleAddNewAddress}>
          <Text style={GlobalStyles.subheading}>Add New Address</Text>
          <Ionicons name="add-circle" size={32} color={colors.blue.light20} />
        </Pressable>
      </View>

      {/* Pinned button at the bottom */}
      <View style={GlobalStyles.buttonContainer}>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: "flex-start", // Aligns content to the top
  },

  /* Selected Address Card */
  selectedAddressCard: {
    borderWidth: 2,
    borderColor: colors.blue.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  addressName: {
    ...GlobalStyles.subheading,
    marginBottom: 4,
  },
  addressLine: {
    ...GlobalStyles.bodyText,
  },

  /* Add New Address Card */
  addAddressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.blue.light40,
    borderRadius: 16,
    padding: 24,
  },
});
