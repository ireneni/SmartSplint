import React from 'react';
import TutorialScreen from './TutorialScreen';
import GlobalHeader from '../components/GlobalHeader';
import { SafeAreaView } from 'react-native';

const frontalSlides = [
  {
    description: "Place stickers on centre of finger tip and joints",
    imageSource: require('../assets/frontal-scan-1.png'),
  },
  {
    description: "Align finger tip sticker with quick of nail",
    imageSource: require('../assets/frontal-scan-2.png'),
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
        slides={frontalSlides}
        onVideoPress={() => console.log('Play frontal scan tutorial video')}
        onContinuePress={() => console.log('Go to camera')}
      />
    </SafeAreaView>
  );
};

export default FrontalScanTutorial;
