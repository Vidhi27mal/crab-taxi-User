import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
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

  const [dateError, setDateError] = useState('')
  const [timeError, setTimeError] = useState('')

  const handleNext = () => {
    let valid = true;
    if (!date) {
      setDateError('Date is required');
      valid = false;
    } else {
      setDateError('')
    }
    if (!time) {
      setTimeError('Time is required');
      valid = false;
    } else {
      setTimeError('');
    }
    if (!valid) {
      return;
    }
    navigation.navigate("SelectVehicle");
  };

  const onDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      setDate(selectedDate);
      setDateError('')
    }
    setShowDatePicker(false);
  };

  const onTimeChange = (event, selectedTime) => {
    if (event.type === "set"){
      setTime(selectedTime);
      setTimeError('')
    } 
    setShowTimePicker(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.text }]}>
        Plan your ride
      </Text>

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

      <TouchableOpacity
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card },
          dateError ? styles.errorInput : null
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

      {dateError ? (
        <Text style={styles.errorText}>{dateError}</Text>
      ) : null}

      <TouchableOpacity
        style={[
          styles.inputBox,
          { borderColor: theme.primary, backgroundColor: theme.card },
          timeError ? styles.errorInput : null
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
      {timeError ? (
        <Text style={styles.errorText}>{timeError}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.nextBtn, { backgroundColor: theme.primary }]}
        onPress={handleNext}
      >
        <Text style={[styles.nextText, { color: theme.text }]}>
          Go Next
        </Text>
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
    color: "#000",
  },

  placeholderText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#000",
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


export default RideDetails;