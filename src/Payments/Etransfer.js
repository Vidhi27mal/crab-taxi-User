import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import React from 'react'
import { useTheme } from '../theme/theme-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '../theme/theme-context'

const Etransfer = ({ navigation }) => {

  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('PaymentMethod')}
      >
        <Icon name="close" size={30} color={theme.primary} />

        <Text style={[styles.headerText, { color: theme.primary }]}>
          E-Transfer
        </Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.text }]}>
          Enter Amount
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            }
          ]}
          placeholder="3500"
          placeholderTextColor={theme.text}
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.text }]}>
          Send To
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            }
          ]}
          placeholder="+1(xxx)-xxx-xxxx"
          placeholderTextColor={theme.text}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: theme.text }]}>
          Add a Note
        </Text>

        <TextInput
          style={[
            styles.inputField,
            {
              borderColor: theme.primary,
              color: theme.text
            }
          ]}
          placeholder="Enter a note"
          placeholderTextColor={theme.text}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.sendBtn,
          { backgroundColor: theme.primary }
        ]}
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
    paddingHorizontal: 70,
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
})

export default Etransfer