import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Camera, CameraType, FlashMode, useCameraPermissions } from 'expo-camera';
import colors from '../theme/colors.ts';

const { width } = Dimensions.get('window');

const ScanningScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

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
      try {
        const photo = await cameraRef.current.takePictureAsync();
        navigation.navigate("ConfirmImage", { imageUri: photo.uri });
      } catch (error) {
        console.error("Error capturing photo:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Padding */}
      <View style={styles.topPadding} />

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={CameraType.back}
          flashMode={FlashMode.torch}
        />
      </View>

      {/* Action Bar */}
      <View style={styles.actionBar}>
        <Pressable style={styles.captureButtonOuter} onPress={takePhoto}>
          <View style={styles.captureButtonInner} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topPadding: {
    height: 96,
  },
  cameraContainer: {
    width: '100%',
    height: (width * 4) / 3,
  },
  camera: {
    flex: 1,
  },
  actionBar: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 40,
  },
  captureButtonOuter: {
    width: 98,
    height: 98,
    borderRadius: 49,
    borderWidth: 2,
    borderColor: colors.blue.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButtonInner: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.blue.primary,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanningScreen;
