 import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CantCancelRide({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Can’t Cancel Ride</Text>

      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineText}>Check Network Connection</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineText}>Refresh Ride Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.solidBtn}
      onPress={() => navigation.navigate("RideCancelConfirm")}
      >
        <Text style={styles.solidText}  >Force Cancel </Text>
      </TouchableOpacity>

    </View>
  );
}


 const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', padding:20 },

  title:{
    fontSize:33,
    fontWeight:'bold',
    color:'#2ECC71',
    textAlign:'center',
    marginTop:20,
    marginBottom:60
  },

  outlineBtn:{
    borderWidth:2,
    borderColor:'#2ECC71',
    borderRadius:12,
    padding:16,
    marginBottom:30,
    alignItems:'center'
  },
  outlineText:{ color:'#333', fontSize:16, fontWeight:'600' },

  solidBtn:{
    backgroundColor:'#2ECC71',
    padding:18,
    borderRadius:12,
    alignItems:'center',
    marginTop:400
  },
  solidText:{ color:'black', fontSize:18, fontWeight:'bold' }
});