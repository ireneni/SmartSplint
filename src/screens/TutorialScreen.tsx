import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";

const { width } = Dimensions.get("window");

interface TutorialItem {
  description: string;
  imageSource: any;
}

interface TutorialScreenProps {
  slides: TutorialItem[]; // Array of images with descriptions
  onVideoPress: () => void;
  onContinuePress: () => void;
}

const TutorialScreen: React.FC<TutorialScreenProps> = ({
  slides,
  onVideoPress,
  onContinuePress,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScroll = (event: any) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / (width * 0.75)
    );
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Dynamic Description */}
        <Text style={styles.description}>
          {slides[currentIndex].description}
        </Text>

        {/* Image Carousel */}
        <View style={styles.imageWrapper}>
          <FlatList
            ref={flatListRef}
            data={slides}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image
                  source={item.imageSource}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </View>

        {/* Dot Indicators */}
        <View style={styles.dotContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>

      <View style={GlobalStyles.buttonContainer}>
        <GlobalButton
          title="Video Tutorial"
          variant="secondary"
          onPress={onVideoPress}
        />
        <GlobalButton
          title="Continue"
          variant="primary"
          onPress={onContinuePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 24,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
  imageWrapper: {
    width: width * 0.75,
    height: width * 0.75,
  },
  imageContainer: {
    width: width * 0.75, // Ensures each item takes up full FlatList width
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#D3D3D3", // Default gray
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#0A2463", // Active dot color (Primary button color)
  },
});

export default TutorialScreen;
