import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import {
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import colors from "../theme/colors";
import GlobalIconButton from "../components/GlobalIconButton";
import { useRoute, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

type ScanningScreenRouteParams = {
  finger: string;
  hand: string;
  scanType: "front" | "side";
};

type ScanningScreenProps = {
  route: {
    params: ScanningScreenRouteParams;
  };
  navigation: any;
};

const ScanningScreen: React.FC<ScanningScreenProps> = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { finger, hand, scanType } = route.params as ScanningScreenRouteParams;

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Loading permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text onPress={requestPermission}>
          Camera permission required. Tap here to grant permission.
        </Text>
      </View>
    );
  }

  const takePhoto = async () => {
    console.log("Photo Captured!");
    if (cameraRef.current) {
      const options = {
        quality: 1,
        exif: false,
      };
      try {
        const photo = await cameraRef.current.takePictureAsync(options);

        if (!photo || !photo.uri) {
          console.error("No photo returned from takePictureAsync");
          return;
        }

        navigation.push("ConfirmImage", { photo, finger, hand, scanType });
      } catch (error) {
        console.error("Error capturing photo:", error);
      }
    }
  };

  const handleExit = () => {
    console.log("Exit Pressed");
    // Instead of simply going back, explicitly navigate to the originating tutorial
    if (scanType === "front") {
      navigation.navigate("FrontScanTutorial", { finger, hand });
    } else {
      navigation.navigate("SideScanTutorial", { finger, hand });
    }
  };

  const handleHelp = () => {
    console.log("Help Pressed");
    // Optionally navigate to a help screen or show a modal
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPadding} />

      <View style={styles.cameraWrapper}>
        <CameraView
          style={styles.cameraContainer}
          facing={facing}
          ref={cameraRef}
          flash="on"
        />
        {/* Finger Overlay Image */}
        <Image
          source={require("../assets/finger-overlay.png")}
          style={styles.overlay}
          resizeMode="contain"
        />
      </View>

      <View style={styles.actionBar}>
        <GlobalIconButton
          icon="close-sharp"
          label="Exit"
          backgroundColor={colors.destructive}
          iconColor="white"
          onPress={handleExit}
        />
        <Pressable style={styles.captureButtonOuter} onPress={takePhoto}>
          <View style={styles.captureButtonInner} />
        </Pressable>
        <GlobalIconButton
          icon="help-sharp"
          label="Help"
          backgroundColor={colors.blue.light30}
          iconColor="black"
          onPress={handleHelp}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topPadding: {
    height: 60,
  },
  cameraWrapper: {
    width: "100%",
    height: (width * 4) / 3,
    position: "relative", // Allows absolute positioning inside
  },
  cameraContainer: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: width,
    aspectRatio: 1,
    bottom: 0,
  },
  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 12,
  },
  captureButtonOuter: {
    width: 98,
    height: 98,
    borderRadius: 49,
    borderWidth: 2,
    borderColor: colors.blue.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  captureButtonInner: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.blue.primary,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
