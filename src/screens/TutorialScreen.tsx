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
import { Ionicons } from "@expo/vector-icons"; // ✅ Add this for icons
import GlobalStyles from "../styles/GlobalStyles";
import GlobalButton from "../components/GlobalButton";

const { width } = Dimensions.get("window");

interface TutorialItem {
  description: string;
  imageSource: any;
}

interface TutorialScreenProps {
  slides: TutorialItem[];
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

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>
          {slides[currentIndex].description}
        </Text>

        <View style={styles.carouselContainer}>
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <Pressable
              style={[styles.arrowButton, styles.leftArrow]}
              onPress={() => scrollToIndex(currentIndex - 1)}
            >
              <Ionicons name="chevron-back" size={24} color="#333" />
            </Pressable>
          )}

          {/* Carousel */}
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

          {/* Right Arrow */}
          {currentIndex < slides.length - 1 && (
            <Pressable
              style={[styles.arrowButton, styles.rightArrow]}
              onPress={() => scrollToIndex(currentIndex + 1)}
            >
              <Ionicons name="chevron-forward" size={24} color="#333" />
            </Pressable>
          )}
        </View>

        {/* Dots */}
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
  carouselContainer: {
    width: width * 0.75,
    height: width * 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
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
    backgroundColor: "#D3D3D3",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#0A2463",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -20 }],
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  leftArrow: {
    left: 20,
  },
  rightArrow: {
    right: 20,
  },
});

export default TutorialScreen;
