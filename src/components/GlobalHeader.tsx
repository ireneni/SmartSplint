import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const GlobalHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Fixed-width space for the back button */}
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backArrow}>{'←'}</Text>
      </TouchableOpacity>

      {/* Title uses GlobalStyles.subheading, preserving its fontSize */}
      <Text style={[GlobalStyles.subheading, styles.headerTitle]}>
        {title}
      </Text>

      {/* Placeholder for symmetry on the right */}
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingBottom: 24,
  },
  backButton: {
    width: 40,          // Fixed width ensures the arrow doesn't push the title off-center
    alignItems: 'flex-start',
    paddingLeft: 8,     // optional: some left padding for the arrow
  },
  backArrow: {
    fontSize: 20,       // Just for the arrow symbol
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    // No fontSize override here, so GlobalStyles.subheading's fontSize remains
  },
  placeholder: {
    width: 40, // same as backButton for perfect centering
  },
});

export default GlobalHeader;
