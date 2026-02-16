import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import { setLastPaymentMethod } from '../utils/PaymentStore';
import { ThemeContext } from '../Theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BankAccount({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const [bankName, setBankName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [transitNo, setTransitNo] = useState('');
  const [institutionNo, setInstitutionNo] = useState('');

  const [bankNameError, setBankNameError] = useState('');
  const [holderNameError, setHolderNameError] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');
  const [transitNoError, setTransitNoError] = useState('');
  const [institutionNoError, setInstitutionNoError] = useState('');

  const handleProceed = () => {
    let valid = true;

    if (!bankName) {
      setBankNameError('Bank name is required')
      valid = false;
    } else {
      setBankNameError('');
    }
    if (!holderName) {
      setHolderNameError("Account holdername is required")
      valid = false;
    } else {
      setHolderNameError('');
    }
    if (!accountNumber) {
      setAccountNumberError('Account number is required')
      valid = false;
    } else {
      setAccountNumberError('')
    }
    if (!transitNo) {
      setTransitNoError('Transit number is required');
      valid = false;
    } else {
      setTransitNoError('')
    }
    if (!institutionNo) {
      setInstitutionNoError('Institution number is required');
      valid = false;
    } else {
      setInstitutionNoError('')
    }

    if (!valid) {
      return;
    }

    setLastPaymentMethod('BankAccount');
    Alert.alert("Account created successfully");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('PaymentMethod')}
      >
        <Icon
          name="close"
          size={30}
          color={'red'}
          style={[styles.closeIcon, { borderColor: theme.primary }]}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Bank Account
        </Text>
      </TouchableOpacity>

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card }
        ]}
      >

        <Text style={[styles.label, { color: theme.text }]}>
          Bank Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            },
            bankNameError ? styles.errorInput : null
          ]}
          placeholder="Royal Bank of Canada"
          placeholderTextColor={theme.placeholder}
          onChangeText={(text) => {
            setBankName(text);
            setBankNameError('');
          }}
        />

        {bankNameError ? (
          <Text style={styles.errorText}>{bankNameError}</Text>
        ) : null}

        <Text style={[styles.label, { color: theme.text }]}>
          Account Holder Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            },
            holderNameError ? styles.errorInput : null

          ]}
          placeholder="Full Name"
          placeholderTextColor={theme.placeholder}
          onChangeText={(text) => {
            setHolderName(text);
            setHolderNameError('')
          }}
        />
        {holderNameError ? (
          <Text style={styles.errorText}>
            {holderNameError}
          </Text>
        ) : null}

        <Text style={[styles.label, { color: theme.text }]}>
          Account Number
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            },
            accountNumberError ? styles.errorInput : null
          ]}
          keyboardType="numeric"
          placeholder="**** 123"
          placeholderTextColor={theme.placeholder}
          onChangeText={(text) => {
            setAccountNumber(text);
            setAccountNumberError('')
          }}
        />
        {accountNumberError ? (
          <Text style={styles.errorText}>
            {accountNumberError}
          </Text>
        ) : null}
        <Text style={[styles.label, { color: theme.text }]}>
          Transit No
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            },
            transitNoError ? styles.errorInput : null
          ]}
          keyboardType="numeric"
          placeholder="12345"
          placeholderTextColor={theme.placeholder}
          onChangeText={(text) => {
            setTransitNo(text);
            setTransitNoError('')
          }}
        />
        {transitNoError ? (
          <Text style={styles.errorText}>
            {transitNoError}
          </Text>
        ) : null}

        <Text style={[styles.label, { color: theme.text }]}>
          Institution No
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: theme.primary,
              backgroundColor: theme.inputBackground,
              color: theme.text
            },
            institutionNoError ? styles.errorInput : null
          ]}
          keyboardType="numeric"
          placeholder="123"
          placeholderTextColor={theme.placeholder}
          onChangeText={(text) => {
            setInstitutionNo(text)
            setInstitutionNoError('')
          }}
        />
        {institutionNoError ? (
          <Text style={styles.errorText}>
            {institutionNoError}
          </Text>
        ) : null}

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.primary }
          ]}
          onPress={handleProceed}
        >
          <Text style={[styles.btnText, { color: theme.buttonText }]}>
            Proceed
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  closeIcon: {
    borderWidth: 3,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },

  label: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 2,
    borderRadius: 9,
    padding: 12,
    marginTop: 6
  },

  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },

  card: {
    borderRadius: 20,
    padding: 20,
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
    marginLeft: 5,
  },
});