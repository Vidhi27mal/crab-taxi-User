import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DriverCancelledRide() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Cancelled Ride</Text>

      <View style={styles.box}>
        <Text style={styles.boxText}>Driver reason: "Ride too far"</Text>
      </View>
    </View>
  );
}const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#fff',padding:20},
    title:{fontSize:28,fontWeight:'bold',color:'#2ECC71',textAlign:'center',marginTop:15},
    box:{
      marginTop:70,
      borderWidth:2,
      borderColor:'#2ECC71',
      borderRadius:15,
      padding:30,
      alignItems:'center'
    },
    boxText:{fontSize:18,fontWeight:'600',color:'#333',textAlign:'center'}
  });