import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalHeader from '../components/GlobalHeader';
import TutorialScreen from './TutorialScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Adjust the path as needed

type SideScanTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SideTutorial'>;
  route: {
    params: {
      finger: string; // e.g., "Index Finger", "Middle Finger", etc.
      hand: string;   // e.g., "Left" or "Right"
    };
  };
};

const sideSlides = [
  {
    description: "Remove the top and bottom front stickers from the finger",
    imageSource: require('../assets/side-scan-1.png'),
  },
  {
    description: "Move the middle sticker to the side of top finger joint",
    imageSource: require('../assets/side-scan-2.png'),
  },
];

const SideScanTutorial: React.FC<SideScanTutorialProps> = ({ navigation, route }) => {
  const { finger, hand } = route.params;

  const handleBackPress = () => {
    console.log('Back arrow pressed');
    navigation.goBack();
  };

  const headerTitle = `${finger}`;

  // Navigate to the video tutorial screen, passing the side scan video as a source.
  const handleVideoPress = () => {
    navigation.navigate('VideoTutorial', {
      videoSource: require('../assets/side-scan-tut-video.mp4'), // Adjust the path to your video file accordingly
    });
  };

  const handleContinuePress = () => {
    console.log('Go to camera');
    // Use push to ensure a new scanning screen is added to the stack
    navigation.push("Scanning", { finger, hand, scanType: "side" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title={headerTitle} onBackPress={handleBackPress} />
      <TutorialScreen
        slides={sideSlides}
        onVideoPress={handleVideoPress}
        onContinuePress={handleContinuePress}
      />
    </SafeAreaView>
  );
};

export default SideScanTutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
