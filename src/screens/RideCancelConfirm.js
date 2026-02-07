import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RideCancelConfirmed({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="checkmark" size={90} color="#fff" />
      </View>

      <Text style={styles.title}>Ride cancelled</Text>
      <Text style={styles.subtitle}>successfully</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    iconWrapper: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#2ECC71',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25
    },
  
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#000'
    },
  
    subtitle: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#000'
    }
  });
     
  