import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';
import { getLastPaymentMethod } from '../utils/PaymentStore';

export default function PaymentFailed({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const retryPayment = () => {
    const last = getLastPaymentMethod();

    if (last) {
      navigation.navigate(last);
    } else {
      navigation.navigate('Payment');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Payment Failed!
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={retryPayment}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Retry Payment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => navigation.navigate('BankAccount')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Change Payment Method
        </Text>
      </TouchableOpacity>

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
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 22,
    textAlign: 'center'
  },

  option: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 10,
    marginTop: 25
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500'
  }
});