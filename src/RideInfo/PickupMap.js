import React from "react";
import { useEffect , useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const GOOGLE_MAPS_APIKEY = "YOUR_GOOGLE_MAPS_API_KEY";

const PickupMap = ({ navigation }) => {
  const driverLocation = {
    latitude: 19.066,
    longitude: 72.865,
  };

  const pickupLocation = {
    latitude: 19.076,
    longitude: 72.8777,
  };

  const [TimeLeft, setTimeLeft] = useState(1 * 60);
  useEffect(() => {
    if (TimeLeft === 0) {
      navigation.replace("ShareOtp");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [TimeLeft]);

  const minutes = Math.floor(TimeLeft / 60);
  const seconds = TimeLeft % 60;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.etaBox}>
        <Text style={styles.etaText}> Picking Up In {minutes}:{seconds.toString().padStart(2, "0")}</Text>
      </View>
      {/* MAP */}
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
            strokeColor="#00bf63"
          />
        </MapView>
      </View>

      {/* DRIVER INFO CARD */}
      <View style={styles.driverCard}>
        <View style={styles.driverRow}>
          <View>
            <Text style={styles.driverName}>Goutam Kumar</Text>
            <Text style={styles.vehicleText}>Honda SUV (Black)</Text>
          </View>

          <Icon name="account-circle" size={55} color="#00bf63" />
        </View>

        <Text style={styles.expText}>2 Yrs Ex |5 
          <Icon name="star" size={14} color="#000" />
        </Text>

        <View style={styles.infoBtn}>
          <Text style={styles.infoBtnText}>PIN - 3086</Text>
        </View>

        <View style={styles.infoBtn}>
          <Text style={styles.infoBtnText}>Vehicle No. CN 008943</Text>
        </View>

        <View style={styles.infoBtn}>
          <Text style={styles.infoBtnText}>Message Driver</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  etaBox: {
    margin: 16,
    borderWidth: 2,
    borderColor: "#00bf63",
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
    borderColor: "#00bf63",
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
    color: "#444",
    marginTop: 2,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  expText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "flex-end",
  },

  infoBtn: {
    borderWidth: 1.5,
    borderColor: "#00bf63",
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 10,
  },

  infoBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },

  messageBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
    gap: 6,
  },

  messageText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#00bf63",
  },
});


export default PickupMap;
