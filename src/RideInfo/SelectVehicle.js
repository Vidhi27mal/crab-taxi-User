import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

const SelectVehicle = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    { id: 1, name: "Sedan Small Car" },
    { id: 2, name: "Sedan Small Car" },
    { id: 3, name: "Sedan Small Car" },
  ];

  const handleConfirm = () => {
    if (!selectedVehicle) {
      Alert.alert("Error", "Please select a vehicle");
      return;
    }
    navigation.navigate("MatchingDriver");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color={theme.primary} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Choose Vehicle
        </Text>

        <View style={{ width: 28 }} />
      </View>

      {/* VEHICLE LIST */}
      {vehicles.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.card,
            {
              borderColor: theme.primary,
              backgroundColor:
                selectedVehicle === item.id
                  ?theme.primary
                  : theme.selectedCard,
            },
          ]}
          onPress={() => setSelectedVehicle(item.id)}
        >
          <Text style={[styles.vehicleText, { color: theme.text }]}>
            {item.name}
          </Text>

          <View
            style={[
              styles.priceIcon,
              { borderColor: theme.primary },
            ]}
          >
            <Text style={[styles.priceText, { color: theme.primary }]}>
              $
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* CONFIRM BUTTON */}
      <TouchableOpacity
        style={[styles.confirmBtn, { backgroundColor: theme.primary }]}
        onPress={handleConfirm}
      >
        <Text
          style={[
            styles.confirmText,
            { color: theme.buttonText },
          ]}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00bf63",
    borderRadius: 14,
    paddingHorizontal: 20,
    height: 65,
    marginBottom: 20,
  },

  cardSelected: {
    backgroundColor: "#eff8f7",
  },

  vehicleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  priceIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#00bf63",
    justifyContent: "center",
    alignItems: "center",
  },

  priceText: {
    color: "#00bf63",
    fontSize: 16,
    fontWeight: "700",
  },

  confirmBtn: {
    backgroundColor: "#00bf63",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 30,
  },

  confirmText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});

export default SelectVehicle;