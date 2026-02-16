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
import Icon from 'react-native-vector-icons/Ionicons';

export default function DebitCard({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const payNow = () => {
    let valid = true;

    if (!cardNumber || cardNumber.length < 16) {
      setCardNumberError('Valid card number is required');
      valid = false;
    } else {
      setCardNumberError('');
    }

    if (!expiry || !expiry.includes('/')) {
      setExpiryError('Valid expiry (MM/YY) is required');
      valid = false;
    } else {
      setExpiryError('');
    }

    if (!cvv || cvv.length < 3) {
      setCvvError('Valid CVV is required');
      valid = false;
    } else {
      setCvvError('');
    }

    if (!valid) return;

    setLastPaymentMethod('DebitCard');
    Alert.alert("Payment successful");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={[styles.card, { backgroundColor: theme.card }]}>

        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate('PaymentMethod')}
        >
          <Icon
            name="close"
            size={30}
            color="red"
            style={[styles.closeIcon, { borderColor: theme.primary }]}
          />
          <Text style={[styles.headerText, { color: theme.primary }]}>
            Card Details
          </Text>
        </TouchableOpacity>

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
            },
            cardNumberError ? styles.errorInput : null
          ]}
          placeholder="xxxx xxxx xxxx xxxx"
          placeholderTextColor={theme.placeholder}
          keyboardType="numeric"
          maxLength={16}
          onChangeText={(text) => {
            setCardNumber(text.replace(/[^0-9]/g, ''));
            setCardNumberError('');
          }}
        />
        {cardNumberError ? (
          <Text style={styles.errorText}>{cardNumberError}</Text>
        ) : null}

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
                },
                expiryError ? styles.errorInput : null
              ]}
              placeholder="MM/YY"
              placeholderTextColor={theme.placeholder}
              maxLength={5}
              onChangeText={(text) => {
                setExpiry(text);
                setExpiryError('');
              }}
            />
            {expiryError ? (
              <Text style={styles.errorText}>{expiryError}</Text>
            ) : null}
          </View>

          {/* CVV */}
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
                },
                cvvError ? styles.errorInput : null
              ]}
              placeholder="123"
              placeholderTextColor={theme.placeholder}
              keyboardType="numeric"
              secureTextEntry
              maxLength={3}
              onChangeText={(text) => {
                setCvv(text.replace(/[^0-9]/g, ''));
                setCvvError('');
              }}
            />
            {cvvError ? (
              <Text style={styles.errorText}>{cvvError}</Text>
            ) : null}
          </View>

        </View>

      </View>

      {/* Pay Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
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
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  closeIcon: {
    borderWidth: 3,
    padding: 4,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },

  label: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginTop: 6
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
  },

  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 40
  },

  card: {
    borderRadius: 20,
    padding: 30,
    marginTop: 40
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  errorInput: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 13,
  },
});
