import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

export default function DriverCancelledRide() {
  const { theme } = useContext(ThemeContext);

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
          { color: theme.primary },
        ]}
      >
        Driver Cancelled Ride
      </Text>

      <View
        style={[
          styles.box,
          { borderColor: theme.primary },
        ]}
      >
        <Text
          style={[
            styles.boxText,
            { color: theme.text },
          ]}
        >
          Driver reason: "Ride too far"
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  box: {
    marginTop: 70,
    borderWidth: 2,
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
  },

  boxText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});