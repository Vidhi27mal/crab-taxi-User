import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Profile({ }) {
  const { user, setUser } = useContext(AuthContext)
  useEffect( () => {
    setName(user);
  }, [])

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [language, setLanguage] = useState('')

  const [nameError, setNameError] = useState('')
  const [genderError, setGenderError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [dobError, setDobError] = useState('')
  const [languageError, setLanguageError] = useState('')

  const [date, setDate] = useState(new Date());
const [showPicker, setShowPicker] = useState(false);

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  }
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSave = () => {

    let valid = true;

    if (!name) {
      setNameError('This field is required');
      valid = false
    } else {
      setNameError('')
    }
    if (!gender) {
      setGenderError('This field is required');
      valid = false
    } else {
      setGenderError('')
    }
    if (!phone) {
      setPhoneError("This field is required");
      valid = false;
    } else if (!validatePhone(phone)) {
      setPhoneError("Invalid phone number");
      valid = false;
    } else {
      setPhoneError("");
    }
    if (!email) {
      setEmailError("This field is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!dob) {
      setDobError('This field is required');
      valid = false
    } else {
      setDobError('')
    }
    if (!language) {
      setLanguageError('This field is required');
      valid = false
    } else {
      setLanguageError('')
    }
    if (!valid) {
      return;
    }
    setUser(name);

    setName('');
    setDob('');
    setEmail('');
    setGender('');
    setLanguage('');
    setPhone('');

    Alert.alert('Profile Updated')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>PROFILE</Text>

        <View style={styles.profileBox}>
          <Icon name="person-outline" style={styles.icon} />

          <Text style={styles.username}>{user}</Text>
        </View>

        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={[styles.inputText, nameError ? styles.errorInput : null]}
            placeholder='Enter Name'
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError("");
            }}
          ></TextInput>
          {nameError ? (
            <Text style={styles.errorText}>{nameError}</Text>
          ) : null}
        </View>


        <View>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={[styles.inputText, genderError ? styles.errorInput : null]}
            placeholder='Enter gender'
            value={gender}
            onChangeText={(text) => {
              setGender(text);
              setGenderError("");
            }}
          ></TextInput>
          {genderError ? (
            <Text style={styles.errorText}>{genderError}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.label}>Phone No.</Text>
          <TextInput style={[styles.inputText, phoneError ? styles.errorInput : null]}
            placeholder='Enter phone number'
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              setPhoneError("");
            }}
            keyboardType="number-pad"
          ></TextInput>
          {phoneError ? (
            <Text style={styles.errorText}>{phoneError}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={[styles.inputText, emailError ? styles.errorInput : null]}
            placeholder='Enter Email'
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
          ></TextInput>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.label}>DOB</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
  <TextInput
    style={[styles.inputText, dobError ? styles.errorInput : null]}
    placeholder="Select DOB"
    value={dob}
    editable={false}   // prevents keyboard
  />
</TouchableOpacity>

{showPicker && (
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    maximumDate={new Date()} // prevents future date
    onChange={(event, selectedDate) => {
      setShowPicker(false);
      if (selectedDate) {
        setDate(selectedDate);
        setDob(selectedDate.toLocaleDateString());
        setDobError("");
      }
    }}
  />
)}
          {dobError ? (
            <Text style={styles.errorText}>{dobError}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.label}>Language</Text>
          <TextInput style={[styles.inputText, languageError ? styles.errorInput : null]}
            placeholder='Enter Language'
            value={language}
            onChangeText={(text) => {
              setLanguage(text);
              setLanguageError("");
            }}
          ></TextInput>
          {languageError ? (
            <Text style={styles.errorText}>{languageError}</Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: 'center',
    color: '#00bf63',
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 8,
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 25,
    borderWidth: 3,
    padding: 10,
    borderRadius: 50,
    borderColor: '#00bf63'
  },
  username: {
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 8
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#00bf63',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveBtn: {
    backgroundColor: '#00bf63',
    borderRadius: 10,
    marginTop: 10
  },
  saveText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '600'
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
})