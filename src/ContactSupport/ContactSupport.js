import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ContactSupport({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contact Support</Text>

      <TouchableOpacity style={styles.option} onPress= {() => navigation.navigate('ChatSupport')}>
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#000" />
        <Text style={styles.optionText}>Chat Support With Us</Text>
      </TouchableOpacity>4

      <TouchableOpacity style={styles.option}  onPress= {() => navigation.navigate('CallSupportScreen')}>
        <Ionicons name="call-outline" size={24} color="#000" />
        <Text style={styles.optionText}>Call With Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}  onPress={() => navigation.navigate('EmailSupport')} >
        <Ionicons name="mail-outline" size={24} color="#000" />
        <Text style={styles.optionText}>Email Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress= {() => navigation.navigate('IssueTyped')}>
        <Ionicons name="mail-outline" size={24} color="#000" />
        <Text style={styles.optionText}>Submit Complain</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress= {() => navigation.navigate('Settings')}  >
        <Ionicons name="mail-outline" size={24} color="#000" />
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons></Ionicons>
      </TouchableOpacity>
      



    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 25
    },
  
    title: {
      fontSize: 33,
      fontWeight: 'bold',
      marginBottom: 25,
      color: '#2ECC71'
    },
  
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 18,
      borderRadius: 10,
      borderWidth:2,
      backgroundColor: 'white',
      marginBottom: 12,
      marginTop:15,
      borderColor:'#2ECC71'
     
      
     
    },
  
    optionText: {
      fontSize: 17,
      marginLeft: 15,
      color: '#000',
      borderColor:'#2ECC71'
    }
  });