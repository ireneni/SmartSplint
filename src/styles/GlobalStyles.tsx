import { StyleSheet } from 'react-native';

const FONT_SIZES = {
  heading: 24,
  subheading: 24,
  body: 20,
  label: 14,
  buttonText: 18,
  stepInstruction: 16,
  screenTitle: 20,
};

const DIMENSIONS = {
  largeButtonWidth: 327,
  largeButtonHeight: 72,
  smallButtonWidth: 155,
  smallButtonHeight: 52,
  inputHeight: 64,
  borderRadius: 16,
};

const GlobalStyles = StyleSheet.create({
  // Base styles for large and small buttons
  buttonLarge: {
    width: '100%',
    height: DIMENSIONS.largeButtonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DIMENSIONS.borderRadius,
    marginVertical: 12,
    paddingHorizontal: 24,
  },
  buttonSmall: {
    width: DIMENSIONS.smallButtonWidth,
    height: DIMENSIONS.smallButtonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DIMENSIONS.borderRadius,
    marginVertical: 4,
  },

  // Button variants (colors)
  buttonPrimary: {
    backgroundColor: '#001f86',
  },
  buttonSecondary: {
    backgroundColor: '#7DD8FF',
  },
  buttonDestructive: {
    backgroundColor: '#FC493B',
  },

  // Reusable text style for button labels
  buttonText: {
    fontSize: FONT_SIZES.buttonText,
    // Use a Poppins variant that is bold, e.g. "Poppins-Bold" or "Poppins-SemiBold"
    fontFamily: 'Poppins-Bold',
    color: '#FFF',
  },

  // Global text styles
  heading: {
    fontSize: FONT_SIZES.heading,
    fontFamily: 'Poppins-Bold',      // e.g., "Bold" variant
    color: '#000',
  },
  Header: {
      fontSize: FONT_SIZES.subheading,
      fontFamily: 'Poppins-Medium',
      color: '#000',
    },
  subheading: {
    fontSize: FONT_SIZES.subheading,
    fontFamily: 'Poppins-SemiBold',  // e.g., "SemiBold" variant
    color: '#000',
  },
  bodyText: {
    fontSize: FONT_SIZES.body,
    fontFamily: 'Poppins-Regular',   // e.g., "Regular" variant
    color: '#000',
  },
  labelText: {
    fontSize: FONT_SIZES.label,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  linkText: {
    fontSize: FONT_SIZES.body,
    fontFamily: 'Poppins-Regular',
    color: '#007AFF',
    textDecorationLine: 'underline',
  },

  // Input field styles
  inputContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginVertical: 8,
    height: DIMENSIONS.inputHeight,
  },
  inputLabel: {
    fontSize: FONT_SIZES.label,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginBottom: 4,
  },
  inputText: {
    fontSize: FONT_SIZES.body,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },

  // Step instruction style
  stepInstruction: {
    fontSize: FONT_SIZES.stepInstruction,
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginVertical: 8,
  },

  // Screen title style
  screenTitle: {
    fontSize: FONT_SIZES.screenTitle,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginVertical: 12,
  },
});

export default GlobalStyles;
