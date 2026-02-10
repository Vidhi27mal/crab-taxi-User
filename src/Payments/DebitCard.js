import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { setLastPaymentMethod } from '../utils/PaymentStore';


export default function DebitCard({ navigation }) {

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');


  const payNow = () => {
    if (!cardNumber || !expiry || !cvv) {
      Alert.alert("Please fill all fields");
      return;
    }
  
    setLastPaymentMethod('DebitCard');
    Alert.alert("Payment successful");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>Card Details</Text>

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="xxxx xxxx xxxx xxxx"
        keyboardType="numeric"
        onChangeText={setCardNumber}
      />

      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.label}>Expiry</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            keyboardType="numeric"
            onChangeText={setExpiry}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            placeholder="123"
            keyboardType="numeric"
            secureTextEntry
            onChangeText={setCvv}
          />
          
          </View>
          
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={payNow}>
        <Text style={styles.btnText}>Pay Now</Text>
      </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 33, fontWeight: 'bold', marginTop: -30, color: '#00bf63', textAlign: 'center', marginBottom: 70 },
  label: { color: 'black', marginTop: 12, fontSize: 18, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#00bf63',
    borderRadius: 10,
    padding: 16,
    marginTop: 6,
    backgroundColor: '#F9F9F9'
  },
  row: { flexDirection: 'row', marginTop: 10 },
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
    padding: 50,
   
    marginTop: 40,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});