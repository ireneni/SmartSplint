import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import GlobalHeader from "../components/GlobalHeader";
import GlobalButton from "../components/GlobalButton";
import GlobalStyles from "../styles/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../theme/colors";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

type Address = {
  id: string;
  address: string;
  city: string;
  postalCode: string;
};

type OrderKitScreenProps = {
  navigation: any;
};

const OrderKitScreen: React.FC<OrderKitScreenProps> = ({ navigation }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch addresses from the user's addresses subcollection
  const fetchAddresses = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
        return;
      }
      const addressesRef = collection(db, "users", user.uid, "addresses");
      const querySnapshot = await getDocs(addressesRef);
      const addressesData: Address[] = [];
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        addressesData.push({
          id: docSnap.id,
          address: data.address,
          city: data.city,
          postalCode: data.postalCode,
        });
      });
      setAddresses(addressesData);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleConfirmShipping = () => {
    navigation.navigate("ShippingConfirmed");
  };

  const handleAddNewAddress = () => {
    navigation.navigate("NewAddress");
  };

  const renderAddressCard = ({ item }: { item: Address }) => (
    <Pressable style={styles.selectedAddressCard}>
      <Text style={styles.addressName}>Address</Text>
      <Text style={styles.addressLine}>{item.address}</Text>
      <Text style={styles.addressLine}>{item.city}</Text>
      <Text style={styles.addressLine}>{item.postalCode}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title="Order Kit" onBackPress={handleBackPress} />

      <View style={styles.content}>
        {loading ? (
          <Text style={GlobalStyles.bodyText}>Loading addresses...</Text>
        ) : addresses.length > 0 ? (
          <FlatList
            data={addresses}
            renderItem={renderAddressCard}
            keyExtractor={(item) => item.id}
            style={{ marginBottom: 24 }}
          />
        ) : (
          <Text style={GlobalStyles.bodyText}>
            No addresses found. Please add one.
          </Text>
        )}

        <Pressable style={styles.addAddressCard} onPress={handleAddNewAddress}>
          <Text style={GlobalStyles.subheading}>Add New Address</Text>
          <Ionicons name="add-circle" size={32} color={colors.blue.light20} />
        </Pressable>
      </View>

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
    justifyContent: "flex-start",
  },
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
  addAddressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.blue.light40,
    borderRadius: 16,
    padding: 24,
  },
});
