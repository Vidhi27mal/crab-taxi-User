import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext"

export default function Profile({}) {
 const {user} = useContext(AuthContext)

 const handleSave = () => {
  Alert.alert('Profile Updated')
 }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>PROFILE</Text>

      <View style={styles.profileBox}>
         <Icon name="person-outline" style={styles.icon} />

        <Text style={styles.username}>{user}</Text>
      </View>

      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter Name'>{user}</TextInput>
      </View>
      <View>
        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter gender'></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Phone No.</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter phone number'></TextInput>
      </View>
      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter Email'></TextInput>
      </View>
      <View>
        <Text style={styles.label}>DOB</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter DOB'></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Language</Text>
        <TextInput style={styles.inputText}
        placeholder='Enter Language'></TextInput>
      </View>
      <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex:1,
    paddingVertical:20,
    paddingHorizontal:20,
  },
  heading : {
    textAlign: 'center',
    color: '#00bf63',
    fontWeight:700,
    fontSize:20,
    marginBottom:8,
  },
  profileBox: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  icon : {
    fontSize:25,
    borderWidth:3,
    padding:10,
    borderRadius:50,
    borderColor:'#00bf63'
  },
  username: {
    fontSize: 30,
    fontWeight:'700',
    marginLeft:20
  },
  label: {
    fontSize:18,
    marginBottom:8
  },
  inputText:{
    borderWidth: 2,
    borderColor:'#00bf63',
    borderRadius:10,
    marginBottom: 10,
    paddingHorizontal:10,
  },
  saveBtn: {
    backgroundColor: '#00bf63',
    borderRadius:10,
    marginTop:10
  },
  saveText : {
    textAlign:'center',
    fontSize:20,
    paddingVertical:10,
    fontWeight:'600'
  }
})