import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RefundStatus() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Refund Status</Text>

      {/* Refund Details */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Refund ID</Text>
          <Text style={styles.value}>RF239041</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Payment Method</Text>
          <Text style={styles.value}>Debit Card</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Refund Amount</Text>
          <Text style={styles.total}>₹370</Text>
        </View>
      </View>

    
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Refund Timeline</Text>

        <Text style={styles.step}>• Request Received</Text>
        <Text style={styles.step}>• Processing</Text>
        <Text style={styles.step}>• Amount will be credited in 5–7 days</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', padding:20 },
  title: { fontSize:32, fontWeight:'700', color:'#2ECC71', marginBottom:60, marginTop:20 },

  card: {
    borderWidth:1,
    borderColor:'#2ECC71',
    borderRadius:12,
    padding:15,
    marginBottom:15
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  label: { color:'#555' },
  value: { color:'#111', fontWeight:'500' },
  total: { fontWeight:'700', color:'#2ECC71' },

  sectionTitle: { fontWeight:'700', color:'#2ECC71', marginBottom:10 },
  step: { color:'#111', marginBottom:8 }
});