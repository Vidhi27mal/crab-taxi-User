import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CallSupportScreen({navigation}) {
  const handleCall = () => {
    Linking.openURL('tel:+911234567890');
  };

  return (
    <View style={styles.container}>

   
      <Text style={styles.header}>Refer A Friend</Text>

   
      <View style={styles.card}>
        <Text style={styles.question}>Invite Friends and earn ride credits!</Text>

        <Text style={styles.info}>
          Your referral Code:{'\n'}
          <Text style={styles.bold}>ABCD1234</Text> 
        </Text>

        
      </View>

   
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('FriendLink')} >
        <Text style={styles.buttonText}>Share invite</Text>
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