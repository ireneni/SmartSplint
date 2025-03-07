import React from 'react';
import { View, Image, StyleSheet, Pressable, Text } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const ConfirmImageScreen = () => {
  const localImage = require('../assets/confirm-placeholder.png'); // Placeholder image

  return (
    <View style={styles.container}>
      {/* Display the captured image */}
      <View style={styles.imageWrapper}>
        <Image source={localImage} style={styles.image} resizeMode="contain" />
      </View>

      {/* Retake and Confirm Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable style={[GlobalStyles.buttonLarge, GlobalStyles.buttonDestructive]}
          onPress={() => console.log("Retake Image")}>
          <Text style={GlobalStyles.buttonText}>Retake Image</Text>
        </Pressable>

        <Pressable style={[GlobalStyles.buttonLarge, GlobalStyles.buttonPrimary]}
          onPress={() => console.log("Confirm Image")}>
          <Text style={GlobalStyles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      marginTop: 164,
  },
  imageWrapper: {
      width: '80%',
      height: '60%',
  },
  image: {
      width: '100%',
      height: '100%'
  },
  buttonContainer: {
      width: '100%',
      position: 'absolute',
      bottom: 62, // Keeps buttons fixed at the bottom
      paddingHorizontal: 24,
  },
});

export default ConfirmImageScreen;
