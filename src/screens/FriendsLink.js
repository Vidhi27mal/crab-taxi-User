import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

export default function RideCancelConfirmed({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View
        style={[
          styles.iconWrapper,
          { backgroundColor: theme.primary },
        ]}
      >
        <Ionicons
          name="checkmark"
          size={90}
          color={theme.buttonText}
        />
      </View>

      <Text
        style={[
          styles.title,
          { color: theme.text },
        ]}
      >
        Your Friend will get your
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: theme.text },
        ]}
      >
        referral Link
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});