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

export default function DebitCard({ navigation }) {

  const { theme } = useContext(ThemeContext);

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
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card }
        ]}
      >

        <Text style={[styles.title, { color: theme.primary }]}>
          Card Details
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>
          Card Number
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
          placeholder="xxxx xxxx xxxx xxxx"
          placeholderTextColor={theme.placeholder}
          keyboardType="numeric"
          onChangeText={setCardNumber}
        />

        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={[styles.label, { color: theme.text }]}>
              Expiry
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
              placeholder="MM/YY"
              placeholderTextColor={theme.placeholder}
              keyboardType="numeric"
              onChangeText={setExpiry}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.label, { color: theme.text }]}>
              CVV
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
              placeholder="123"
              placeholderTextColor={theme.placeholder}
              keyboardType="numeric"
              secureTextEntry
              onChangeText={setCvv}
            />
          </View>
        </View>

      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.primary }
        ]}
        onPress={payNow}
      >
        <Text style={[styles.btnText, { color: theme.buttonText }]}>
          Pay Now
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: -30,
    textAlign: 'center',
    marginBottom: 70
  },

  label: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginTop: 6
  },

  row: {
    flexDirection: 'row',
    marginTop: 10
  },

  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },

  card: {
    borderRadius: 20,
    padding: 50,
    marginTop: 40
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});