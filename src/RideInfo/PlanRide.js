import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

const PlanRide = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleRideDetails = () => {
    if (!pickup || !destination) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    navigation.navigate("RideDetails", { pickup, destination });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 200, height: 60 }}
          />
        </View>

        <Icon
          name="menu"
          size={40}
          color={theme.primary}
          onPress={() => navigation.openDrawer()}
        />
      </View>

      <Text style={[styles.title, { color: theme.text }]}>
        Plan your ride
      </Text>

      {/* PICKUP */}
      <View
        style={[
          styles.inputBox,
          { borderColor: theme.primary }
        ]}
      >
        <Icon name="search" size={22} color={theme.primary} />
        <TextInput
          placeholder="Choose your location"
          placeholderTextColor={theme.text === "#ffffff" ? "#aaa" : "#666"}
          style={[styles.input, { color: theme.text }]}
          value={pickup}
          onChangeText={setPickup}
        />
      </View>

      {/* DESTINATION */}
      <View
        style={[
          styles.inputBox,
          { borderColor: theme.primary }
        ]}
      >
        <Icon name="search" size={22} color={theme.primary} />
        <TextInput
          placeholder="Destination?"
          placeholderTextColor={theme.text === "#ffffff" ? "#aaa" : "#666"}
          style={[styles.input, { color: theme.text }]}
          value={destination}
          onChangeText={setDestination}
        />
      </View>

      {/* BUTTONS */}
      <TouchableOpacity
        style={[styles.primaryBtn, { backgroundColor: theme.primary }]}
        onPress={handleRideDetails}
      >
        <Text style={[styles.primaryText, { color: theme.background }]}>
          Book Now
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.primaryBtn, { backgroundColor: theme.primary }]}
      >
        <Text style={[styles.primaryText, { color: theme.background }]}>
          Book Cab For Later
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.primaryBtnSmall, { backgroundColor: theme.primary }]}
      >
        <Text style={[styles.primaryText, { color: theme.background }]}>
          Saved Places
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default PlanRide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 40,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  primaryBtn: {
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  primaryBtnSmall: {
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  primaryText: {
    fontSize: 18,
    fontWeight: "600",
  },
});