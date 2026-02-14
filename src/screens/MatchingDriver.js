import React, { useEffect, useRef, useContext } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

const { width } = Dimensions.get("window");

const MatchingDriver = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("PickupMap");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: theme.text },
        ]}
      >
        Matching with Driver
      </Text>

      <View
        style={[
          styles.progressContainer,
          { borderColor: theme.text },
        ]}
      >
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: progressWidth,
              backgroundColor: theme.primary,
            },
          ]}
        />
      </View>

      <Text
        style={[
          styles.waitText,
          { color: theme.text },
        ]}
      >
        Please Wait (6s)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
  },

  progressContainer: {
    width: width * 0.8,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 20,
  },

  waitText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default MatchingDriver;