import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalHeader from '../components/GlobalHeader';
import TutorialScreen from './TutorialScreen';

type FrontalScanTutorialProps = {
  navigation: any;
  route: {
    params: {
      finger: string;
      hand: string;
    };
  };
};

const frontalSlides = [
  {
    description: 'Place stickers on centre of finger tip and joints',
    imageSource: require('../assets/frontal-scan-1.png'),
  },
  {
    description: 'Align finger tip sticker with quick of nail',
    imageSource: require('../assets/frontal-scan-2.png'),
  },
];

const FrontalScanTutorial: React.FC<FrontalScanTutorialProps> = ({
  navigation,
  route,
}) => {
  const { finger, hand } = route.params;

  const handleBackPress = () => {
    console.log('Back arrow pressed');
    navigation.goBack();
  };

  // Set header title dynamically based on the selected finger.
  const headerTitle = `${finger}`;

  const handleContinue = () => {
    console.log('Go to camera');
    // Pass scanType: "front" so the Scanning screen knows it's a front scan.
    navigation.navigate('Scanning', {
      finger,
      hand,
      scanType: 'front',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <GlobalHeader title={headerTitle} onBackPress={handleBackPress} />
      <TutorialScreen
        slides={frontalSlides}
        onVideoPress={() => console.log('Play frontal scan tutorial video')}
        onContinuePress={handleContinue}
      />
    </SafeAreaView>
  );
};

export default FrontalScanTutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
