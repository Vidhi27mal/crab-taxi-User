import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChargedButRideNotCompleted({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Charged but Ride Not Completed</Text>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Trip Summary</Text>

        

        

        
      </View>

      {/* Amount Charged */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Amount Charged : $__</Text>

        
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
  title: { fontSize:30, fontWeight:'700', color:'#00bf63', marginBottom:20 , textAlign:'center'},

  card: {
    borderWidth:1,
    borderColor:'#00bf63',
    borderRadius:12,
    padding:15,
    marginBottom:15,
    marginTop:20
  },
  sectionTitle: {
    fontWeight:'700',
    marginBottom:10,
    color:'black',
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
    marginTop:380
  },
  buttonText: {
    color:'black',
    fontSize:15,
    textAlign:'center',
    fontWeight:'600'
  }
});