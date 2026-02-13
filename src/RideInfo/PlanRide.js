import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

const PlanRide = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const[pickupError, setPickupError] = useState("");
  const[destinationError, setDestinationError] = useState("");

  const handleRideDetails = () => {
    let valid = true;
    if (!pickup) {
      setPickupError("Pickup location is required");
      valid = false;
    } else {
      setPickupError("");
    }
    if (!destination) {
      setDestinationError("Destination is required");
      valid = false;
    }
      else {  
      setDestinationError("");
    }
    if (!valid) {
      return;
    }
    navigation.navigate("RideDetails", { pickup, destination });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

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

      <View style={[styles.inputBox, { borderColor: theme.primary }, pickupError ? styles.errorInput : null]}>
        <Icon name="search" size={22} color={theme.primary} />

        <TextInput
          placeholder="Choose your location"
          placeholderTextColor={theme.text === "#ffffff" ? "#aaa" : "#666"}
          style={[styles.input, { color: theme.text }]}
          value={pickup}
          onChangeText={(text) => {
            setPickup(text);
            setPickupError("");
          }}
        />
      </View>

      {pickupError ? (
        <Text style={styles.errorText}>{pickupError}</Text>
      ) : null}

      <View style={[styles.inputBox,{ borderColor: theme.primary }, destinationError ? styles.errorInput : null]}>
        <Icon name="search" size={22} color="#00bf63" />
     
        <TextInput
          placeholder="Destination?"
          placeholderTextColor={theme.text === "#ffffff" ? "#aaa" : "#666"}
          style={[styles.input, { color: theme.text }]}
          value={destination}
          onChangeText={(text) => {
            setDestination(text);
            setDestinationError("");
          }}
        />
      </View>
      {destinationError ? (
        <Text style={styles.errorText}>{destinationError}</Text>
      ) : null}

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
    color: "#000",
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
  errorInput: {
  borderColor: 'red',
},
errorText: {
  color: 'red',
  fontSize: 14,
  marginTop: -10,
  marginBottom: 15,
  marginLeft: 5,
},
});

export default PlanRide;

