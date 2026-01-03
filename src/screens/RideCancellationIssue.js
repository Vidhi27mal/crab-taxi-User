import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RideCancellationIssue({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ride & Cancellation Issues</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('DriverDidNotArrive')}>
        <Text style={styles.optionText}>Driver did not arrive</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('RideCancelledByDriver')}>
        <Text style={styles.optionText}>Ride cancelled by driver</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('ChargedForCancelledRide')}>
        <Text style={styles.optionText}>Charged for cancelled ride</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', padding:20 },
  title: { fontSize:22, fontWeight:'700', color:'#2ECC71', marginBottom:25 },
  option: {
    borderWidth:1,
    borderColor:'#2ECC71',
    borderRadius:12,
    padding:18,
    marginBottom:15
  },
  optionText: { fontSize:16, fontWeight:'500', color:'#111' }
});