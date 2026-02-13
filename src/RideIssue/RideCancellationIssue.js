import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

export default function RideCancellationIssue({ navigation }) {
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
        Ride & Cancellation Issues
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate("RideCancelledByDriver")}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Ride cancelled by driver
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate("CantCancelRide")}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Can't Cancel ride
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 33,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
  },

  option: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    marginTop: 20,
  },

  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
});