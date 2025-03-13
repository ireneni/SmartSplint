// GlobalInput.tsx
import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

interface GlobalInputProps extends TextInputProps {
  label?: string;
}

const GlobalInput: React.FC<GlobalInputProps> = ({ label, style, ...props }) => {
  return (
    <View style={GlobalStyles.inputContainer}>
      {label && <Text style={GlobalStyles.inputLabel}>{label}</Text>}
      <TextInput style={[GlobalStyles.inputText, style]} {...props} />
    </View>
  );
};

export default GlobalInput;
