import React from 'react';
import TutorialScreen from './TutorialScreen';

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
  return (
    <TutorialScreen
      slides={frontalSlides}
      onVideoPress={() => console.log('Play frontal scan tutorial video')}
      onContinuePress={() => console.log('Go to camera')}
    />
  );
};

export default FrontalScanTutorial;
