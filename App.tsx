import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { useGlobalFonts } from "./src/styles/GlobalStyles";

import LandingScreen from "./src/screens/LandingScreen";
import SignupScreen from "./src/screens/SignupScreen";
import GetStartedInfoScreen from "./src/screens/GetStartedInfoScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OrderKitScreen from "./src/screens/OrderKitScreen";
import NewAddressScreen from "./src/screens/NewAddressScreen";
import ShippingConfirmedScreen from "./src/screens/ShippingConfirmedScreen";
import HandSelectionScreen from "./src/screens/HandSelectionScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import FingerSelectionScreen from "./src/screens/FingerSelectionScreen";
import ScanningScreen from "./src/screens/ScanningScreen";
import ConfirmImageScreen from "./src/screens/ConfirmImageScreen";
import ImageConfirmedScreen from "./src/screens/ImageConfirmedScreen";
import FrontScanTutorial from "./src/screens/FrontScanTutorial";
import SideScanTutorial from "./src/screens/SideScanTutorial";
import VideoTutorialScreen from "./src/screens/VideoTutorialScreen";

const Stack = createStackNavigator();

export default function App() {
  const fontsLoaded = useGlobalFonts();

  if (!fontsLoaded) {
    return null; // Or a loading indicator component
  }

  return (
           <NavigationContainer>
             <Stack.Navigator
               initialRouteName="Landing"
               screenOptions={{ headerShown: false }}
             >
               <Stack.Screen name="Landing" component={LandingScreen} />
               <Stack.Screen name="Login" component={LoginScreen} />
               <Stack.Screen name="Signup" component={SignupScreen} />
               <Stack.Screen name="Home" component={HomeScreen} />
               <Stack.Screen name="HandSelection" component={HandSelectionScreen} />
               <Stack.Screen name="ContactUs" component={ContactUsScreen} />
               <Stack.Screen name="GetStartedInfo" component={GetStartedInfoScreen} />
               <Stack.Screen name="FingerSelection" component={FingerSelectionScreen} />
               <Stack.Screen name="FrontScanTutorial" component={FrontScanTutorial} />
               <Stack.Screen name="SideScanTutorial" component={SideScanTutorial} />
               <Stack.Screen name="VideoTutorial" component={VideoTutorialScreen} />
               <Stack.Screen name="Scanning" component={ScanningScreen} />
               <Stack.Screen name="ConfirmImage" component={ConfirmImageScreen} />
               <Stack.Screen name="ImageConfirmed" component={ImageConfirmedScreen} />
               <Stack.Screen name="NewAddress" component={NewAddressScreen} />
               <Stack.Screen name="OrderKit" component={OrderKitScreen} />
               <Stack.Screen
                 name="ShippingConfirmed"
                 component={ShippingConfirmedScreen}
               />
             </Stack.Navigator>
           </NavigationContainer>
         );
    //<SafeAreaView style={{ flex: 1 }}>
      //<FrontScanTutorial />
    //</SafeAreaView>
  //);
}
