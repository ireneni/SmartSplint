import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const GlobalInput = ({ label, ...props }) => {
  return (
    <View style={GlobalStyles.inputContainer}>
      {label && (
        <Text style={GlobalStyles.inputLabel}>
          {label}
        </Text>
      )}
      <TextInput
        style={GlobalStyles.inputText}
        {...props}
      />
    </View>
  );
};

export default GlobalInput;
