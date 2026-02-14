import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../Theme/ThemeContext";

export default function HelpAndSupport({ navigation }) {
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
        Emergency SOS
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          { backgroundColor: theme.danger || "red" }, 
        ]}
        onPress={() => navigation.navigate("PaymentRefundIssue")}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.buttonText || "#fff" },
          ]}
        >
          Emergency
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
    marginTop: 15,
    marginBottom: 55,
    textAlign: "center",
  },

  option: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 17,
  },

  optionText: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
});