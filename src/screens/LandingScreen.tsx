import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";
import colors from "../theme/colors";

type LandingPageProps = {
  navigation: any;
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
    <View style={styles.container}>
      {/* Top Section: Collage of images */}
      <View style={styles.topCollageContainer}>
        <Image
          source={require("../assets/landing.png")}
          style={styles.topCollageContainer}
        />
      </View>

      {/* Bottom Section: White card area */}
      <View style={styles.bottomCardContainer}>
        <Text style={[GlobalStyles.heading, styles.cardTitle]}>
          Custom OA finger splints
        </Text>
        <Text style={[GlobalStyles.bodyText, styles.cardSubtitle]}>
          Scan at home, we deliver
        </Text>
      </View>
      {/* Buttons */}
      <View style={[GlobalStyles.buttonContainer, styles.bottomContainer]}>
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
  );
};

export default LandingPage;

const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.light40,
  },
  topCollageContainer: {
    width: "100%",
  },
  bottomCardContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    alignItems: "center",
    minHeight: SCREEN_HEIGHT * 0.42,
    maxHeight: SCREEN_HEIGHT * 0.48,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  cardTitle: {
    textAlign: "center",
  },
  cardSubtitle: {
    textAlign: "center",
  },
  bottomContainer: {
    marginBottom: 58,
  },
});
