import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChargedButRideNotCompleted({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Charged but Ride Not Completed</Text>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Trip Summary</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Pickup</Text>
          <Text style={styles.value}>City Center</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Drop</Text>
          <Text style={styles.value}>Airport</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>12 km</Text>
        </View>
      </View>

      {/* Amount Charged */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Amount Charged</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Ride Fare</Text>
          <Text style={styles.value}>₹350</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tax</Text>
          <Text style={styles.value}>₹20</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.total}>₹370</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request Refund</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff', padding:20 },
  title: { fontSize:30, fontWeight:'700', color:'#00bf63', marginBottom:20 },

  card: {
    borderWidth:1,
    borderColor:'#00bf63',
    borderRadius:12,
    padding:15,
    marginBottom:15
  },
  sectionTitle: {
    fontWeight:'700',
    marginBottom:10,
    color:'#00bf63',
    fontSize:18
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:8
  },
  label: { color:'#555', },
  value: { color:'#111', fontWeight:'500' },
  total: { fontWeight:'700', color:'#00bf63' },

  button: {
    backgroundColor:'#00bf63',
    padding:15,
    borderRadius:10,
    marginTop:280
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontWeight:'600'
  }
});