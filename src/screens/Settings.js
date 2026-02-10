import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="red" />
        </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress= {() => navigation.navigate('ResetPassword')}>
       
        <Text style={styles.optionText}>Password Reset</Text>
      </TouchableOpacity>4

      <TouchableOpacity style={styles.option}  onPress= {() => navigation.navigate('ChooseMap')}>
       
        <Text style={styles.optionText}>Choose Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}  onPress= {() => navigation.navigate('ReferFriend')} >
        
        <Text style={styles.optionText}>Refer a Friend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}onPress= {() => navigation.navigate('Privacy')} >
      
        
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}onPress= {() => navigation.navigate('Safety')} >
      
       
        <Text style={styles.optionText}>Safety</Text>
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
      color: '#2ECC71',
      textAlign:'center'
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
    }
  });