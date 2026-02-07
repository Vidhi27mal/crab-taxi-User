import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CallSupportScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+911234567890');
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.header}>Call Support</Text>

      {/* Green bordered box */}
      <View style={styles.card}>
        <Text style={styles.question}>Need immediate help?</Text>

        <Text style={styles.info}>
          Our support team is available{'\n'}
          <Text style={styles.bold}>24/7</Text> to assist you.
        </Text>

        <Text style={styles.label}>Support Number:</Text>
        <Text style={styles.phone}>+91 123 456 7890</Text>
      </View>

   
      <TouchableOpacity style={styles.button} onPress={handleCall}>
        <Text style={styles.buttonText}>Call Now</Text>
      </TouchableOpacity>

    </View>
  );


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 40
    },
  
    header: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
      color: '#22B573',
      marginBottom: 25
    },
  
    card: {
      borderWidth: 3,
      borderColor: '#22B573',
      borderRadius: 12,
      padding: 20,
      marginTop: 30   
    },
  
    question: {
      fontSize: 18,
      fontWeight: '500',
      color: '#000',
      marginBottom: 40,
      marginTop:18,
    },
  
    info: {
      fontSize: 18,
      color: '#000',
      marginBottom: 20,
      lineHeight: 20,
      marginTop:20,
      marginBottom:50,
    },
  
    bold: {
      fontWeight: '700'
    },
  
    label: {
      fontSize: 18,
      color: '#000',
      marginBottom: 4
    },
  
    phone: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000'
    },
  
    button: {
      backgroundColor: '#22B573',
      paddingVertical: 14,
      borderRadius: 10,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      alignItems: 'center',
      marginTop:-40
    },
  
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: '600',
     
    }
  });