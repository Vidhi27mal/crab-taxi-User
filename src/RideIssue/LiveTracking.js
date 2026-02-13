import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { ThemeContext } from "../Theme/ThemeContext";

export default function LiveRideTracking() {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.rightSection}>
        <Text
          style={[
            styles.title,
            { color: theme.primary },
          ]}
        >
          Live Ride Tracking
        </Text>

        <WebView
          source={{
            uri:
              "https://www.google.com/maps/dir/?api=1&origin=19.0760,72.8777&destination=19.0896,72.8656&travelmode=driving",
          }}
          style={styles.map}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  rightSection: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 33,
    fontWeight: "600",
    marginBottom: 16,
  },

  map: {
    flex: 1,
  },
});