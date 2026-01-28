import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

const RideDetails = ({ navigation, route }) => {
  const { pickup, destination } = route.params;
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleNext = () => {
    if (!date || !time) {
      Alert.alert("Error", "Please select date and time");
      return;
    } 
    navigation.navigate("SelectVehicle");
  }

  // DATE CHANGE
  const onDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  // TIME CHANGE
  const onTimeChange = (event, selectedTime) => {
    if (event.type === "set") {
      setTime(selectedTime);
    }
    setShowTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan your ride</Text>

      {/* PICKUP */}
      <View style={styles.inputBox}>
        <Icon name="search" size={22} color="#00bf63" />
        <TextInput
          placeholder="Choose your location"
          placeholderTextColor="#666"
          style={styles.input}
          value={pickup}
          editable={false}
        />
      </View>

      {/* DESTINATION */}
      <View style={styles.inputBox}>
        <Icon name="search" size={22} color="#00bf63" />
        <TextInput
          placeholder="Destination?"
          placeholderTextColor="#666"
          style={styles.input}
          value={destination}
          editable={false}
        />
      </View>

      {/* DATE */}
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => setShowDatePicker(true)}
      >
        <Icon name="calendar-outline" size={22} color="#00bf63" />
        <Text style={styles.placeholderText}>
          {date ? date.toDateString() : "Choose Date"}
        </Text>
      </TouchableOpacity>

      {/* TIME */}
      <TouchableOpacity
        style={styles.inputBox}
        onPress={() => setShowTimePicker(true)}
      >
        <Icon name="time-outline" size={22} color="#00bf63" />
        <Text style={styles.placeholderText}>
          {time
            ? time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Choose Time"}
        </Text>
      </TouchableOpacity>

 
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>Go Next</Text>
      </TouchableOpacity>

 
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

   
      {showTimePicker && (
        <DateTimePicker
          value={time || new Date()}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00bf63",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 55,
    marginBottom: 18,
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },

  placeholderText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#666",
  },

  nextBtn: {
    backgroundColor: "#00bf63",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  nextText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#001a0f",
  },
});


export default RideDetails;