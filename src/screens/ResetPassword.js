import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Reset Password</Text>

      <TouchableOpacity style={styles.option} onPress= {() => navigation.navigate('ChatSupport')}>
       
        
        <TextInput style={styles.input}  placeholder="TYPE YOUR CURRENT PASSWORD" />
      </TouchableOpacity>4

      <TouchableOpacity style={styles.option}  onPress= {() => navigation.navigate('CallSupportScreen')}>
       
   
        <TextInput style={styles.input}  placeholder="TYPE YOUR New PASSWORD" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}   >
        <TextInput style={styles.input}  placeholder="Confirm your New PASSWORD" />
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress= {() => navigation.navigate('PasswordChangeSuccessfully')} >
          <Text style={styles.btnText}>UpdatePassword</Text>
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
      fontSize: 18,
      marginLeft: 15,
      color: '#000',
      borderColor:'#2ECC71',
      fontWeight:500
    },
    button: {
        backgroundColor: '#00bf63',
        padding: 16,
        borderRadius: 8,
        marginTop: 30,
        alignItems: 'center'
      },
      
 btnText: { fontWeight: 'bold', fontSize: 16 }
  });