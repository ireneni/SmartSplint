import React from "react";
import { Dimensions, View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";

type LandingPageProps = {
  navigation: any; // or use a more specific type from React Navigation
};

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    console.log("Get Started pressed");
    navigation.navigate("GetStartedInfo");
  };

  const handleSignIn = () => {
    console.log("Sign In pressed");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section: Collage of images */}
      <View style={styles.topCollageContainer}>
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

export default LandingPage;

const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
  topCollageContainer: {
    flex: 1.2,
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
    borderRadius: 8,
  },
  bottomCardContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    alignItems: "center",
    paddingHorizontal: 24,
    minHeight: SCREEN_HEIGHT * 0.38,
    maxHeight: SCREEN_HEIGHT * 0.45,
  },
  cardTitle: {
    textAlign: "center",
  },
  cardSubtitle: {
    textAlign: "center",
  },
  buttonRow: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
  },
  cardButton: {
    width: "100%",
    paddingHorizontal: 24,
  },
});
