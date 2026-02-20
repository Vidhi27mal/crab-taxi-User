import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

export default function CantCancelRide({ navigation }) {
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
        Can’t Cancel Ride
      </Text>

      <TouchableOpacity
        style={[
          styles.outlineBtn,
          { borderColor: theme.primary },
        ]}
      >
        <Text
          style={[
            styles.outlineText,
            { color: theme.text },
          ]}
        >
          Check Network Connection
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.outlineBtn,
          { borderColor: theme.primary },
        ]}
      >
        <Text
          style={[
            styles.outlineText,
            { color: theme.text },
          ]}
        >
          Refresh Ride Screen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.solidBtn,
          { backgroundColor: theme.primary },
        ]}
        onPress={() => navigation.navigate("RideCancelConfirm")}
      >
        <Text
          style={[
            styles.solidText,
            { color: theme.buttonText },
          ]}
        >
          Force Cancel
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
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 60,
  },

  outlineBtn: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
    alignItems: "center",
  },

  outlineText: {
    fontSize: 16,
    fontWeight: "600",
  },

  solidBtn: {
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 200,
  },

  solidText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});