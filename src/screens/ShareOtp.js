import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ShareOtp = ({ navigation }) => {
  const otp = ["1", "2", "3", "4"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cab is Here</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Share Your OTP!</Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <Text key={index} style={styles.otpText}>
              {digit}
            </Text>
          ))}
        </View>

        <Icon
          name="thumb-up-outline"
          size={140}
          color="#00bf63"
          style={{ marginTop: 30 }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RideCompleted")}
      >
        <Text style={styles.buttonText}>Enjoy Your Ride</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  header: {
    backgroundColor: "#00bf63",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },

  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  otpRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },

  otpText: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 2,
  },

  button: {
    borderWidth: 2,
    borderColor: "#00bf63",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});


export default ShareOtp;
