import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

export default function PaymentRefundIssue({ navigation }) {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Payment / Refund Issue
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => navigation.navigate('PaymentFailed')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Payment Failed
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
        onPress={() => navigation.navigate('ChargedButRideNotCompleted')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Charged but Ride not Completed
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
        onPress={() => navigation.navigate('RefundStatus')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Refund Status
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
    marginBottom: 45,
    marginTop: 15
  },

  option: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 19
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500'
  }
});