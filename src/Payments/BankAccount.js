import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { setLastPaymentMethod } from '../utils/PaymentStore';


export default function BankAccount({ navigation }) {

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
    <View style={styles.container}>
      <Text style={styles.title}>Bank Account</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Bank Name</Text>
        <TextInput style={styles.input} placeholder="Royal Bank of Canada" onChangeText={setBankName} />

        <Text style={styles.label}>Account Holder Name</Text>
        <TextInput style={styles.input} placeholder="Full Name" onChangeText={setHolderName} />

        <Text style={styles.label}>Account Number</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="**** 123" onChangeText={setAccountNumber} />

        <Text style={styles.label}>Transit No</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="12345" onChangeText={setTransitNo} />

        <Text style={styles.label}>Institution No</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="123" onChangeText={setInstitutionNo} />

        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.btnText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 33, fontWeight: 'bold', marginBottom: -33, marginTop: 15, textAlign: 'center', color: "#00bf63" },
  label: { marginTop: 12, color: '#555', fontSize: 18, fontWeight: "bold" },
  input: {
    borderWidth: 2,
    borderColor: '#00bf63',
    borderRadius: 9,
    padding: 12,
    marginTop: 6,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#00bf63',
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    
    marginTop: 60,
  },

  btnText: { fontWeight: 'bold', fontSize: 16 }
});