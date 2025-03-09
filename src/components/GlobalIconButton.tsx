import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalStyles from "../styles/GlobalStyles";

interface GlobalIconButtonProps {
  icon: keyof typeof Ionicons.glyphMap; // Icon name from Ionicons
  label: string; // Button label
  onPress: () => void; // Click handler
  backgroundColor?: string; // Background color
  iconColor?: string; // Icon color
}

const GlobalIconButton: React.FC<GlobalIconButtonProps> = ({
  icon,
  label,
  onPress,
  backgroundColor = "#007AFF",
  iconColor = "#FFFFFF",
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor }]}
      >
        <Ionicons name={icon} size={28} color={iconColor} />
      </TouchableOpacity>
      <Text style={[GlobalStyles.bodyText, styles.label]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centers both icon and text
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28, // Circular button
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 4,
    textAlign: "center",
  },
});

export default GlobalIconButton;
