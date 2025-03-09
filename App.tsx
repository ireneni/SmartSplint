import React from "react";
import { SafeAreaView } from "react-native";
import { useGlobalFonts } from "./src/styles/GlobalStyles";
import LoginScreen from "./src/screens/LoginScreen";
import FingerSelectionScreen from "./src/screens/FingerSelectionScreen";
import LandingScreen from "./src/screens/LandingScreen";
import HandSelectionScreen from "./src/screens/HomePage";
import ScanningScreen from "./src/screens/ScanningScreen";
import ConfirmImageScreen from "./src/screens/ConfirmImageScreen";
import FrontScanTutorial from "./src/screens/FrontScanTutorial";
import SideScanTutorial from "./src/screens/SideScanTutorial";

export default function App() {
  const fontsLoaded = useGlobalFonts();

  if (!fontsLoaded) {
    return null; // Or a loading indicator component
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SideScanTutorial />
    </SafeAreaView>
  );
}
