import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../Theme/ThemeContext";

const ShareOtp = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const otp = ["1", "2", "3", "4"];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: theme.primary },
        ]}
      >
        <Text
          style={[
            styles.headerText,
            { color: theme.buttonText },
          ]}
        >
          Your Cab is Here
        </Text>
      </View>

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            { color: theme.text },
          ]}
        >
          Share Your OTP!
        </Text>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <Text
              key={index}
              style={[
                styles.otpText,
                { color: theme.text },
              ]}
            >
              {digit}
            </Text>
          ))}
        </View>

        <Icon
          name="thumb-up-outline"
          size={140}
          color={theme.primary}
          style={{ marginTop: 30 }}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate("RideCompleted")}
      >
        <Text
          style={[
            styles.buttonText,
            { color: theme.primary },
          ]}
        >
          Enjoy Your Ride
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShareOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  header: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },

  headerText: {
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