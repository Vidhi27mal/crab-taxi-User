import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Touchable } from 'react-native'


const Etransfer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('PaymentMethod')}>
        <Icon name="close" style={styles.closeIcon} />
        <Text style={styles.headerText}>E-Transfer</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Amount</Text>
        <TextInput style={styles.inputField}
          placeholder="3500"
          keyboardType='number-pad' />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Send To</Text>
        <TextInput style={styles.inputField}
          placeholder="+1(xxx)-xxx-xxxx"
          keyboardType='number-pad' />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add a Note</Text>
        <TextInput style={styles.inputField} placeholder="Enter a note" />
      </View>
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send Money</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  closeIcon: {
    fontSize: 30,
    color: 'red',
    fontWeight: '700',
    borderWidth: 3,
    borderColor: '#00bf63',
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 70,
    fontSize: 30,
    fontWeight: '700',
    color: '#00bf63',
  },
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  inputField: {
    borderWidth: 2,
    borderColor: '#00bf63',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  sendBtn: {
    backgroundColor: '#00bf63',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
  },
  sendText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

})
export default Etransfer
