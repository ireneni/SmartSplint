import React from 'react';
import TutorialScreen from './TutorialScreen';
import GlobalHeader from '../components/GlobalHeader';
import { SafeAreaView } from 'react-native';

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

const FrontalScanTutorial = () => {
  const handleBackPress = () => {
    console.log('Back arrow pressed');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GlobalHeader title="Index Finger" onBackPress={handleBackPress} />
      <TutorialScreen
        slides={sideSlides}
        onVideoPress={() => console.log('Play side scan tutorial video')}
        onContinuePress={() => console.log('Go to camera')}
      />
    </SafeAreaView>
  );
};

export default FrontalScanTutorial;
