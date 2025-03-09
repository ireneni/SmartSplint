import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "../theme/colors";

const GlobalHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Fixed-width space for the back button */}
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <FontAwesome6 name="angle-left" size={24} color={colors.blue.light20} />
      </TouchableOpacity>

      {/* Title uses GlobalStyles.subheading, preserving its fontSize */}
      <Text style={[GlobalStyles.screenTitle, styles.headerTitle]}>
        {title}
      </Text>

      {/* Placeholder for symmetry on the right */}
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 24,
  },
  backButton: {
    paddingLeft: 24, // optional: some left padding for the arrow
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    includeFontPadding: false, // Android-specific fix
  },
  placeholder: {
    width: 40, // same as backButton for perfect centering
  },
});

export default GlobalHeader;
