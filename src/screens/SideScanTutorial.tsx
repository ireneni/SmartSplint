import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalHeader from '../components/GlobalHeader';
import TutorialScreen from './TutorialScreen';

type SideScanTutorialProps = {
  navigation: any;
  route: {
    params: {
      finger: string; // e.g., "Index Finger", "Middle Finger", etc.
      hand: string;   // e.g., "Left" or "Right"
    };
  };
};

const sideSlides = [
  {
    description: "Remove front stickers from the finger",
    imageSource: require('../assets/side-scan-1.png'),
  },
  {
    description: "Place sticker on the side of top finger joint",
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

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title={headerTitle} onBackPress={handleBackPress} />
      <TutorialScreen
        slides={sideSlides}
        onVideoPress={() => console.log('Play side scan tutorial video')}
        onContinuePress={() => {
          console.log('Go to camera');
          // Use push to ensure a new scanning screen is added to the stack
          navigation.push("Scanning", { finger, hand, scanType: "side" });
        }}
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
