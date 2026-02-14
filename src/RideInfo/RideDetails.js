import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ThemeContext } from "../Theme/ThemeContext";

const RideDetails = ({ navigation, route }) => {
  const { pickup, destination } = route.params;
  const { theme } = useContext(ThemeContext);

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
  };

  const onDateChange = (event, selectedDate) => {
    if (event.type === "set") setDate(selectedDate);
    setShowDatePicker(false);
  };

  const onTimeChange = (event, selectedTime) => {
    if (event.type === "set") setTime(selectedTime);
    setShowTimePicker(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      <Text style={[styles.title, { color: theme.text }]}>
        Plan your ride
      </Text>

      {/* PICKUP */}
      <View
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card }
        ]}
      >
        <Icon name="search" size={22} color={theme.primary} />
        <TextInput
          placeholder="Choose your location"
          placeholderTextColor={theme.placeholder}
          style={[styles.input, { color: theme.text }]}
          value={pickup}
          editable={false}
        />
      </View>

      {/* DESTINATION */}
      <View
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card }
        ]}
      >
        <Icon name="search" size={22} color={theme.primary} />
        <TextInput
          placeholder="Destination?"
          placeholderTextColor={theme.placeholder}
          style={[styles.input, { color: theme.text }]}
          value={destination}
          editable={false}
        />
      </View>

      {/* DATE */}
      <TouchableOpacity
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card }
        ]}
        onPress={() => setShowDatePicker(true)}
      >
        <Icon name="calendar-outline" size={22} color={theme.primary} />
        <Text
          style={[
            styles.placeholderText,
            { color: date ? theme.text : theme.placeholder }
          ]}
        >
          {date ? date.toDateString() : "Choose Date"}
        </Text>
      </TouchableOpacity>

      {/* TIME */}
      <TouchableOpacity
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card }
        ]}
        onPress={() => setShowTimePicker(true)}
      >
        <Icon name="time-outline" size={22} color={theme.primary} />
        <Text
          style={[
            styles.placeholderText,
            { color: time ? theme.text : theme.placeholder }
          ]}
        >
          {time
            ? time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Choose Time"}
        </Text>
      </TouchableOpacity>

      {/* NEXT BUTTON */}
      <TouchableOpacity
        style={[styles.nextBtn, { backgroundColor: theme.primary }]}
        onPress={handleNext}
      >
        <Text style={[styles.nextText, { color: theme.background }]}>
          Go Next
        </Text>
      </TouchableOpacity>

      {/* DATE PICKER */}
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* TIME PICKER */}
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
    color: "black",
  },
});


export default RideDetails;