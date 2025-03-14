import { StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import colors from "../theme/colors";
import { Platform } from "react-native";

export const useGlobalFonts = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-SemiBold": Poppins_600SemiBold,
  });

  return fontsLoaded;
};

const FONT_SIZES = {
  heading: 24,
  subheading: 20,
  body: 18,
  label: 16,
  buttonText: 18,
};

const DIMENSIONS = {
  largeButtonHeight: 72,
  inputHeight: 64,
  borderRadius: 16,
};

const GlobalStyles = StyleSheet.create({
  // Base styles for large and small buttons
  buttonLarge: {
    width: "100%",
    height: DIMENSIONS.largeButtonHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: DIMENSIONS.borderRadius,
    marginVertical: 12,
    paddingHorizontal: 24,
  },

  // Button variants (colors)
  buttonPrimary: {
    backgroundColor: colors.blue.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.blue.light30,
  },
  buttonDestructive: {
    backgroundColor: colors.destructive,
  },

  // Reusable text style for button labels
  buttonText: {
    fontSize: FONT_SIZES.buttonText,
    // Use a Poppins variant that is bold, e.g. "Poppins-Bold" or "Poppins-SemiBold"
    fontFamily: "Poppins-SemiBold",
    color: "#FFF",
  },

  buttonTextBlack: {
    color: "#000",
  },

  // Global text styles
  heading: {
    fontSize: FONT_SIZES.heading,
    fontFamily: "Poppins-SemiBold",
    color: "#000",
  },
  subheading: {
    fontSize: FONT_SIZES.subheading,
    fontFamily: "Poppins-SemiBold",
    color: "#000",
  },
  bodyText: {
    fontSize: FONT_SIZES.body,
    fontFamily: "Poppins-Regular",
    color: "#000",
  },
  labelText: {
    fontSize: FONT_SIZES.label,
    fontFamily: "Poppins-Regular",
    color: colors.text.secondary,
  },
  linkText: {
    fontSize: FONT_SIZES.body,
    fontFamily: "Poppins-Regular",
    color: colors.text.link,
  },

  // Input field styles
  inputContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    justifyContent: "center",
    marginVertical: 12,
    height: DIMENSIONS.inputHeight,
  },
  inputLabel: {
    fontSize: FONT_SIZES.label,
    fontFamily: "Poppins-Regular",
    color: "#747474",
  },
  inputText: {
    fontSize: FONT_SIZES.label,
    fontFamily: "Poppins-Regular",
    color: "#000",
  },
  // Screen title style
  screenTitle: {
    fontSize: FONT_SIZES.heading,
    fontFamily: "Poppins-Medium",
    color: "#000",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
});

export default GlobalStyles;
