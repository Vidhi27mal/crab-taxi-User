import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PaymentRefundIssue({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Payment / Refund Issue</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('PaymentFailed')}>
        <Text style={styles.optionText}>Payment Failed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('ChargedButRideNotCompleted')}>
        <Text style={styles.optionText}>Charged but Ride not Completed</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('RefundStatus')}>
        <Text style={styles.optionText}>Refund Status</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 33,
    fontWeight: '700',
    color: '#00bf63',
    marginBottom: 45,
    marginTop: 15
  },
  option: {
    borderWidth: 1,
    borderColor: '#00bf63',
    borderRadius: 12,
    padding: 18,
    marginBottom: 19
  },
  optionText: {
    fontSize: 18,
    color: '#111',
    fontWeight: '500'
  }
});