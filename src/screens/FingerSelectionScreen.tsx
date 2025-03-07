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

const FingerSelectionScreen = () => {
  const handleBackPress = () => {
    console.log('Back arrow pressed');
    // Navigate back or perform your logic here
  };

  const handleFingerPress = (fingerName) => {
    console.log(`${fingerName} pressed`);
    // Navigate or perform your logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Use the GlobalHeader with a dynamic title */}
      <GlobalHeader title="Left Hand" onBackPress={handleBackPress} />

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        {/* Index Finger */}
        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Index Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Index Finger</Text>
        </TouchableOpacity>

        {/* Middle Finger */}
        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Middle Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Middle Finger</Text>
        </TouchableOpacity>

        {/* Ring Finger */}
        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Ring Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Ring Finger</Text>
        </TouchableOpacity>

        {/* Pinky Finger */}
        <TouchableOpacity
          style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary, styles.fingerButton]}
          onPress={() => handleFingerPress('Pinky Finger')}
        >
          <Text style={GlobalStyles.buttonText}>Pinky Finger</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Full screen, white background
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Container for the four finger buttons
  buttonsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Extra spacing for the finger buttons
  fingerButton: {
    marginBottom: 24,
  },
});

export default FingerSelectionScreen;
