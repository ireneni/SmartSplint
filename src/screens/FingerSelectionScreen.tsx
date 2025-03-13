import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import GlobalHeader from '../components/GlobalHeader';

type FingerSelectionScreenProps = {
  navigation: any;
  route: {
    params: {
      hand: string;
    };
  };
};

const FingerSelectionScreen: React.FC<FingerSelectionScreenProps> = ({ navigation, route }) => {
  const { hand } = route.params;

  const handleBackPress = () => {
    console.log('Back arrow pressed');
    navigation.goBack();
  };

  const handleFingerPress = (fingerName: string) => {
    console.log(`${fingerName} pressed for ${hand} hand`);
    navigation.navigate("FrontScanTutorial", { finger: fingerName, hand });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dynamic header using the hand parameter */}
      <GlobalHeader title={`${hand} Hand`} onBackPress={handleBackPress} />

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Index Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Index Finger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Middle Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Middle Finger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Ring Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Ring Finger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Pinky Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Pinky Finger</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FingerSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerButton: {
    marginBottom: 16,
  },
});
