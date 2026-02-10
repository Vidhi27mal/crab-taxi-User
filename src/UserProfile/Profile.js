import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, Alert, } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";

const InputField = ({
  label,
  value,
  onChange,
  error,
  placeholder,
  editable = true,
  onPress,
  keyboardType = "default",
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>

      {editable ? (
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          keyboardType={keyboardType}
          style={[styles.input, error && { borderColor: "red" }]}
          autoCorrect={false}
        />
      ) : (
        <TouchableOpacity
          style={[
            styles.input,
            error && { borderColor: "red" },
            { justifyContent: "center" },
          ]}
          onPress={onPress}
          activeOpacity={0.8}
        >
          <Text style={{ color: value ? "#000" : "#999" }}>
            {value || placeholder}
          </Text>
        </TouchableOpacity>
      )}

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const ProfileScreen = () => {
  const initialForm = {
    name: "",
    gender: "",
    phone: "",
    email: "",
    dob: "",
    language: "",
  }
  const [form, setForm] = useState({ ...initialForm });

  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.gender.trim()) newErrors.gender = "Gender is required";
    if (!/^\+?\d{7,15}$/.test(form.phone))
      newErrors.phone = "Enter valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter valid email";
    if (!form.dob) newErrors.dob = "DOB is required";
    if (!form.language.trim())
      newErrors.language = "Language is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      Alert.alert("Success", "Profile updated successfully");

      setForm(initialForm);
      setErrors({});
      setSelectedDate(new Date());
      setShowDatePicker(false);

    }
  };

  const onDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      const formatted = `${String(date.getDate()).padStart(2, "0")}/${String(
        date.getMonth() + 1
      ).padStart(2, "0")}/${date.getFullYear()}`;

      setForm({ ...form, dob: formatted });
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>PROFILE</Text>

      <View style={styles.profileBox}>
        <Icon name="person-outline" style={styles.icon} />
        <View>
          <Text style={styles.name}>GOURAV BREJA</Text>
          <View style={styles.rideBadge}>
            <Text style={styles.rideText}>20 Rides</Text>
          </View>
        </View>
      </View>

      <InputField
        label="Name"
        placeholder="Enter your name"
        value={form.name}
        onChange={(t) => setForm({ ...form, name: t })}
        error={errors.name}
      />

      <InputField
        label="Gender"
        placeholder="Male / Female"
        value={form.gender}
        onChange={(t) => setForm({ ...form, gender: t })}
        error={errors.gender}
      />

      <InputField
        label="Ph No."
        placeholder="+91 9876543210"
        keyboardType="phone-pad"
        value={form.phone}
        onChange={(t) => setForm({ ...form, phone: t })}
        error={errors.phone}
      />

      <InputField
        label="E-Mail"
        placeholder="example@gmail.com"
        keyboardType="email-address"
        value={form.email}
        onChange={(t) => setForm({ ...form, email: t })}
        error={errors.email}
      />

      <InputField
        label="DOB"
        placeholder="Select Date of Birth"
        value={form.dob}
        editable={false}
        onPress={() => setShowDatePicker(true)}
        error={errors.dob}
      />

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          maximumDate={new Date()}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}

      <InputField
        label="Language"
        placeholder="English / Hindi"
        value={form.language}
        onChange={(t) => setForm({ ...form, language: t })}
        error={errors.language}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#00bf63",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 20,
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  icon: {
    borderRadius: 35,
    marginRight: 15,
    fontSize: 30,
    color: "#00bf63",
    borderWidth: 2,
    borderColor: "#00bf63",
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  rideBadge: {
    backgroundColor: "#00bf63",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  rideText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00bf63",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  saveBtn: {
    backgroundColor: "#00bf63",
    padding: 15,
    borderRadius: 12,
    marginBottom: 40,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
