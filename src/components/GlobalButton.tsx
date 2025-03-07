import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const GlobalButton = ({
  title,
  onPress,
  variant = 'primary', // Options: "primary", "secondary", "destructive"
  size = 'large',       // Options: "large", "small"
  buttonStyle,        // Additional style overrides for the button container
  textStyle,          // Additional style overrides for the button text
}) => {
  // Choose the base style depending on the size
  const baseStyle =
    size === 'small'
      ? GlobalStyles.buttonSmall
      : GlobalStyles.buttonLarge;

  // Choose the variant style based on the variant prop
  let variantStyle;
  if (variant === 'secondary') {
    variantStyle = GlobalStyles.buttonSecondary;
  } else if (variant === 'destructive') {
    variantStyle = GlobalStyles.buttonDestructive;
  } else {
    variantStyle = GlobalStyles.buttonPrimary;
  }

  return (
    <TouchableOpacity
      style={[baseStyle, variantStyle, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[GlobalStyles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default GlobalButton;
