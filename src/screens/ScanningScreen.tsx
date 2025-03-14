import { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import {
  CameraType,
  CameraView,
  useCameraPermissions,
  FlashMode,
} from "expo-camera";
import colors from "../theme/colors";
import ConfirmImageScreen from "./ConfirmImageScreen";
import GlobalIconButton from "../components/GlobalIconButton";

const { width } = Dimensions.get("window");

const ScanningScreen = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

  // While the permission request is loading, show a loading state
  if (!permission) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Loading permissions...</Text>
      </View>
    );
  }

  // If permission is not granted, prompt the user
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
        setPhoto(photo);
      } catch (error) {
        console.error("Error capturing photo:", error);
      }
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  if (photo)
    return (
      <ConfirmImageScreen photo={photo} handleRetake={handleRetakePhoto} />
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Padding */}
      <View style={styles.topPadding} />

      {/* Camera View */}
      <CameraView
        style={styles.cameraContainer}
        facing={facing}
        ref={cameraRef}
        flash="on"
      />

      {/* Action Bar */}
      <View style={styles.actionBar}>
        <GlobalIconButton
          icon="close-sharp"
          label="Exit"
          backgroundColor={colors.destructive}
          iconColor="white"
          onPress={() => alert("Exit Pressed")}
        />
        <Pressable style={styles.captureButtonOuter} onPress={takePhoto}>
          <View style={styles.captureButtonInner} />
        </Pressable>
        <GlobalIconButton
          icon="help-sharp"
          label="Help"
          backgroundColor={colors.blue.light30}
          iconColor="black"
          onPress={() => alert("Help Pressed")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topPadding: {
    height: 60,
  },
  cameraContainer: {
    width: "100%",
    height: (width * 4) / 3,
  },
  camera: {
    flex: 1,
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

export default ScanningScreen;
