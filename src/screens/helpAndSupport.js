import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
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
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color={theme.text} />
        </TouchableOpacity>

        <Text
          style={[
            styles.title,
            { color: theme.primary },
          ]}
        >
          Help & Support
        </Text>

        <View style={{ width: 28 }} />
      </View>

      {/* OPTIONS */}
      <View>
        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("PaymentRefundIssue")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Payment / Refund Issue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("RideCancellationIssue")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Ride / Cancellation Issue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            { borderColor: theme.primary },
          ]}
          onPress={() => navigation.navigate("ContactSupport")}
        >
          <Text
            style={[
              styles.optionText,
              { color: theme.text },
            ]}
          >
            Contact Support
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },

  option: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 18,
    marginBottom: 17,
  },

  optionText: {
    fontSize: 18,
    fontWeight: "500",
  },
});