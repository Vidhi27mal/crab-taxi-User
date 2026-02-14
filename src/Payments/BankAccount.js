import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import { setLastPaymentMethod } from '../utils/PaymentStore';
import { ThemeContext } from '../Theme/ThemeContext';

export default function BankAccount({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const [bankName, setBankName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [transitNo, setTransitNo] = useState('');
  const [institutionNo, setInstitutionNo] = useState('');

  const handleProceed = () => {
    if (!bankName || !holderName || !accountNumber || !transitNo || !institutionNo) {
      Alert.alert("Please fill all fields");
      return;
    }

    setLastPaymentMethod('BankAccount');
    Alert.alert("Account created successfully");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Bank Account
      </Text>

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card }
        ]}
      >

        <Text style={[styles.label, { color: theme.text }]}>
          Bank Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            }
          ]}
          placeholder="Royal Bank of Canada"
          placeholderTextColor={theme.placeholder}
          onChangeText={setBankName}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          Account Holder Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            }
          ]}
          placeholder="Full Name"
          placeholderTextColor={theme.placeholder}
          onChangeText={setHolderName}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          Account Number
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            }
          ]}
          keyboardType="numeric"
          placeholder="**** 123"
          placeholderTextColor={theme.placeholder}
          onChangeText={setAccountNumber}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          Transit No
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            }
          ]}
          keyboardType="numeric"
          placeholder="12345"
          placeholderTextColor={theme.placeholder}
          onChangeText={setTransitNo}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          Institution No
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            }
          ]}
          keyboardType="numeric"
          placeholder="123"
          placeholderTextColor={theme.placeholder}
          onChangeText={setInstitutionNo}
        />

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.primary }
          ]}
          onPress={handleProceed}
        >
          <Text style={[styles.btnText, { color: theme.buttonText }]}>
            Proceed
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: -33,
    marginTop: 15,
    textAlign: 'center'
  },

  label: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold"
  },

  input: {
    borderWidth: 2,
    borderRadius: 9,
    padding: 12,
    marginTop: 6
  },

  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },

  card: {
    borderRadius: 20,
    padding: 20,
    marginTop: 60
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});