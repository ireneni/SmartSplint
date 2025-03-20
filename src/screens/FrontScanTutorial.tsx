import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

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

const initializeSession = async (hand: string, finger: string) => {
  try {
    let sessionId = uuid.v4(); // ✅ Correctly generates UUID in React Native
    const userId = await AsyncStorage.getItem("userId") || "guest";
    const expirationTime = Date.now() + 30 * 60 * 1000; // 30 min session expiry

    const sessionData = {
      sessionId,
      userId,
      hand,
      finger,
      expirationTime,
    };

    await AsyncStorage.setItem("currentSession", JSON.stringify(sessionData));
    console.log("Session initialized:", sessionData);
  } catch (error) {
    console.error("Error initializing session:", error);
  }
};

const FrontalScanTutorial: React.FC<FrontalScanTutorialProps> = ({
  navigation,
  route,
}) => {
  const { finger, hand } = route.params;

  useEffect(() => {
    initializeSession(hand, finger);
  }, []);

  const handleBackPress = () => {
    console.log('Back arrow pressed');
    navigation.goBack();
  };

  const headerTitle = `${finger}`;

  const handleContinue = () => {
    console.log('Go to camera');
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
