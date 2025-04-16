// VideoTutorialScreen.tsx
import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  VideoTutorial: {
    videoSource: any;
  };
};

type VideoTutorialRouteProp = RouteProp<RootStackParamList, "VideoTutorial">;

const VideoTutorialScreen: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const navigation = useNavigation();
  const route = useRoute<VideoTutorialRouteProp>();

  const { videoSource } = route.params;

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={videoSource}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping={false}
        volume={1.0}
      />

      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          videoRef.current?.pauseAsync();
          navigation.goBack();
        }}
      >
        <Ionicons name="close" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 20,
  },
});

export default VideoTutorialScreen;
