import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";

const LandingPage = () => {
  const handleGetStarted = () => {
    console.log("Get Started pressed");
    // Navigate or perform logic here
  };

  const handleSignIn = () => {
    console.log("Sign In pressed");
    // Navigate or perform logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section: Collage of images */}
      <View style={styles.topCollageContainer}>
        {/* Example of a simple 3x3 or 2x4 grid, adjust as needed */}
        <View style={styles.row}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
          <Image
            source={{ uri: "https://via.placeholder.com/100x100" }}
            style={styles.collageImage}
          />
        </View>
        {/* Add more rows as needed for your collage */}
      </View>

      {/* Bottom Section: White card area */}
      <View style={styles.bottomCardContainer}>
        <Text style={[GlobalStyles.heading, styles.cardTitle]}>
          Custom OA finger splints
        </Text>
        <Text style={[GlobalStyles.bodyText, styles.cardSubtitle]}>
          Scan at home, we deliver
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <GlobalButton
            title="Get Started"
            variant="primary"
            onPress={handleGetStarted}
            style={styles.cardButton}
          />
          <GlobalButton
            title="Sign In"
            variant="secondary"
            onPress={handleSignIn}
            style={styles.cardButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C", // Or the dark background from your Figma
  },
  topCollageContainer: {
    flex: 1.2, // Adjust ratio to control how much space the collage occupies
    // If you want rounded corners at the bottom of this collage, do something like:
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // overflow: 'hidden',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 4,
  },
  collageImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8, // if you want rounded corners for each image
  },
  bottomCardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20, // Round corners at the top
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    // If you want a blue border around this white card, do:
    // borderWidth: 2,
    // borderColor: '#43C0F6',
  },
  cardTitle: {
    textAlign: "center",
    marginBottom: 8,
    // If you want a specific color for the heading:
    // color: '#0A2463',
  },
  cardSubtitle: {
    textAlign: "center",
    marginBottom: 24,
    // color: '#555',
  },
  buttonRow: {
    width: "100%",
    alignItems: "center",
    // If you want the buttons stacked vertically, no change needed.
    // If you want them side-by-side, you can do flexDirection: 'row'.
  },
  cardButton: {
    width: "100%",
    marginBottom: 16,
  },
});

export default LandingPage;
