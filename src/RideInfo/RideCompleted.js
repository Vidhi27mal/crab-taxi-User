import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../Theme/ThemeContext";

const RideCompleted = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>

      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text style={[styles.headerText, { color: theme.text }]}>
          Ride Completed
        </Text>
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <View style={[styles.checkCircle, { backgroundColor: theme.primary }]}>
          <Icon name="check" size={120} color="#fff" />
        </View>

        <Text style={[styles.message, { color: theme.text }]}>
          You Have Reached{"\n"}To Your Destination!
        </Text>
      </View>

      {/* FARE BOX */}
      <View style={[styles.fareBox, { borderColor: theme.primary }]}>
        <Text style={[styles.fareLabel, { color: theme.text }]}>
          TOTAL FARE
        </Text>
        <Text style={[styles.fareAmount, { color: theme.primary }]}>
          $40
        </Text>
      </View>

      {/* PAY BUTTON */}
      <TouchableOpacity
        style={[styles.payBtn, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <Text style={[styles.payText, { color: theme.text}]}>
          Pay Now
        </Text>
      </TouchableOpacity>

      {/* RATE BUTTON */}
      <TouchableOpacity
        style={[styles.rateBtn, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate("DriverTip")}
      >
        <Text style={[styles.rateText, { color: theme.primary }]}>
          Rate The Driver
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default RideCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 40,
  },
  header: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  center: {
    alignItems: "center",
    marginBottom: 40,
    paddingVertical: 20,
  },
  checkCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 26,
  },
  fareBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  fareLabel: {
    fontSize: 16,
    fontWeight: "700",
  },
  fareAmount: {
    fontSize: 22,
    fontWeight: "800",
  },
  payBtn: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },
  payText: {
    fontSize: 16,
    fontWeight: "700",
  },
  rateBtn: {
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  rateText: {
    fontSize: 16,
    fontWeight: "700",
  },
});