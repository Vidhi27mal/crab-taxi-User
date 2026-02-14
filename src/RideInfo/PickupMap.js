import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../Theme/ThemeContext";

const GOOGLE_MAPS_APIKEY = "YOUR_GOOGLE_MAPS_API_KEY";

const PickupMap = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const driverLocation = {
    latitude: 19.066,
    longitude: 72.865,
  };

  const pickupLocation = {
    latitude: 19.076,
    longitude: 72.8777,
  };

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft === 0) {
      navigation.replace("ShareOtp");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View
        style={[
          styles.etaBox,
          { borderColor: theme.primary },
        ]}
      >
        <Text style={[styles.etaText, { color: theme.text }]}>
          Picking Up In {minutes}:{seconds.toString().padStart(2, "0")}
        </Text>
      </View>

      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: pickupLocation.latitude,
            longitude: pickupLocation.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          <Marker coordinate={driverLocation} title="Driver" />
          <Marker coordinate={pickupLocation} title="Pickup" />

          <MapViewDirections
            origin={driverLocation}
            destination={pickupLocation}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={theme.primary}
          />
        </MapView>
      </View>

      <View
        style={[
          styles.driverCard,
          { borderColor: theme.primary },
        ]}
      >
        <View style={styles.driverRow}>
          <View>
            <Text style={[styles.driverName, { color: theme.text }]}>
              Goutam Kumar
            </Text>
            <Text style={[styles.vehicleText, { color: theme.text }]}>
              Honda SUV (Black)
            </Text>
          </View>

          <Icon
            name="account-circle"
            size={55}
            color={theme.primary}
          />
        </View>

        <Text style={[styles.expText, { color: theme.text }]}>
          2 Yrs Ex | 5{" "}
          <Icon name="star" size={14} color={theme.primary} />
        </Text>

        <View
          style={[
            styles.infoBtn,
            { borderColor: theme.primary },
          ]}
        >
          <Text style={[styles.infoBtnText, { color: theme.text }]}>
            PIN - 3086
          </Text>
        </View>

        <View
          style={[
            styles.infoBtn,
            { borderColor: theme.primary },
          ]}
        >
          <Text style={[styles.infoBtnText, { color: theme.text }]}>
            Vehicle No. CN 008943
          </Text>
        </View>

        <View
          style={[
            styles.infoBtn,
            { borderColor: theme.primary },
          ]}
        >
          <Text style={[styles.infoBtnText, { color: theme.text }]}>
            Message Driver
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PickupMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  etaBox: {
    margin: 16,
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: "center",
  },

  etaText: {
    fontSize: 16,
    fontWeight: "600",
  },

  mapWrapper: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 18,
    overflow: "hidden",
  },

  map: {
    flex: 1,
  },

  driverCard: {
    margin: 16,
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
  },

  driverRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  driverName: {
    fontSize: 18,
    fontWeight: "700",
  },

  vehicleText: {
    fontSize: 14,
    marginTop: 2,
  },

  expText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "flex-end",
  },

  infoBtn: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 10,
  },

  infoBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },
});