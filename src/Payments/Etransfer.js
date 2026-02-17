import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native'
import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../Theme/ThemeContext'

const Etransfer = ({ navigation }) => {

  const [amount, setAmount] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [note, setNote] = useState("");

  const [amountError, setAmountError] = useState("");
  const [sendToError, setSendToError] = useState("");
  const [noteError, setNoteError] = useState("");

  const { theme } = useContext(ThemeContext)

  const sendMoney = () => {
    let valid = true;

    if(!amount) {
      setAmountError('This field is required');
      valid = false
    } else {
      setAmountError('')
    }
    if(!sendTo) {
      setSendToError('This field is required')
      valid = false
    } else {
      setSendToError('')
    }
    if (!note) {
      setNoteError('his field is required')
      valid = false
    } else {
      setNoteError('')
    }
    if (!valid) return;

        Alert.alert("Send Money Successfully");

        setAmount("");
  setSendTo("");
  setNote("");

  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
              style={styles.header}
              onPress={() => navigation.navigate('PaymentMethod')
              }
            >
              <Icon
                name="close"
                size={28}
                color={"red"}
                style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
              />
              <Text style={[styles.headerText, { color: theme.primary }]}>
                E - Transfer
              </Text>
            </TouchableOpacity>

      <View style={[styles.inputContainer, ]}>
        <Text style={[styles.label, { color: theme.text }]}>
          Enter Amount
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            },
            amountError ? styles.errorInput : null
          ]}
          placeholder="3500"
          placeholderTextColor={theme.text}
          keyboardType="number-pad"
          onChangeText={(text) => {
            setAmount(text)
            setAmountError('')
          }}
          value={amount}
        />
        {amountError ? (
        <Text style={styles.errorText}>{amountError}</Text>
      ) : null}
      </View>

      

      <View style={[styles.inputContainer, ]}>
        <Text style={[styles.label, { color: theme.text }]}>
          Send To
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            },
            sendToError ? styles.errorInput : null
            
          ]}
          placeholder="+1(xxx)-xxx-xxxx"
          placeholderTextColor={theme.text}
          keyboardType="number-pad"
          onChangeText={(text) => {
            setSendTo(text)
            setSendToError('')
          }}
          value={sendTo}
          
        />
        {sendToError ? (
        <Text style={styles.errorText}>{sendToError}</Text>
      ) : null}
      </View>

      <View style={[styles.inputContainer, ]}>
        <Text style={[styles.label, { color: theme.text }]}>
          Add a Note
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            },
            noteError ? styles.errorInput : null
          ]}
          placeholder="Enter a note"
          placeholderTextColor={theme.text}
          onChangeText={(text) => {
            setNote(text)
            setNoteError('')
          }}
          value={note}
        />
        {noteError ? (
        <Text style={styles.errorText}>{noteError}</Text>
      ) : null}
      </View>

      <TouchableOpacity
        style={[
          styles.sendBtn,
          { backgroundColor: theme.primary }
        ]}
        onPress={sendMoney}
      >
        <Text style={styles.sendText}>
          Send Money
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 50,
    fontSize: 30,
    fontWeight: '700',
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
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  sendBtn: {
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
  errorInput: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 13,
  },
})

export default Etransfer