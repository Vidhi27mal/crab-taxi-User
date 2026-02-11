import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const RideCompleted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Ride Completed</Text>
      </View>

      <View style={styles.center}>
        <View style={styles.checkCircle}>
          <Icon name="check" size={120} color="#fff" />
        </View>

        <Text style={styles.message}>
          You Have Reached{"\n"}To Your Destination!
        </Text>
      </View>

      <View style={styles.fareBox}>
        <Text style={styles.fareLabel}>TOTAL FARE</Text>
        <Text style={styles.fareAmount}>$40</Text>
      </View>

      <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate("PaymentMethod")}>
        <Text style={styles.payText}>Pay Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rateBtn} onPress={() => navigation.navigate("DriverTip")}>
        <Text style={styles.rateText}>Rate The Driver</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical: 40,
  },
  header: {
    backgroundColor: "#00bf63",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
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
    backgroundColor: "#00bf63",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    lineHeight: 26,
  },
  fareBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00bf63",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  fareLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  fareAmount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#00bf63",
  },
  payBtn: {
    backgroundColor: "#00bf63",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },
  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  rateBtn: {
    borderWidth: 2,
    borderColor: "#00bf63",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  rateText: {
    color: "#00bf63",
    fontSize: 16,
    fontWeight: "700",
  },
});


export default RideCompleted;
