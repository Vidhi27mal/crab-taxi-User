import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const MatchingDriver = ({ navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: false,
    }).start();

    // Auto navigate
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
    <View style={styles.container}>
      <Text style={styles.title}>Matching with Driver</Text>

      <View style={styles.progressContainer}>
        <Animated.View
          style={[styles.progressFill, { width: progressWidth }]}
        />
      </View>

      <Text style={styles.waitText}>Please Wait (6s)</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
    color: "#000",
  },
  progressContainer: {
    width: width * 0.8,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#00bf63",
    borderRadius: 20,
  },
  waitText: {
    marginTop: 20,
    fontSize: 16,
    color: "#000",
  },
});

export default MatchingDriver;
