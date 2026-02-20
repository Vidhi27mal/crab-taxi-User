import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext'; 

export default function Settings({ navigation }) {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Reset Password
      </Text>

      {/* Current Password */}
      <View style={[styles.inputBox, { borderColor: theme.primary, backgroundColor: theme.card }]}>
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="TYPE YOUR CURRENT PASSWORD"
          placeholderTextColor={theme.text + '80'}
          secureTextEntry
        />
      </View>

      {/* New Password */}
      <View style={[styles.inputBox, { borderColor: theme.primary, backgroundColor: theme.card }]}>
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="TYPE YOUR NEW PASSWORD"
          placeholderTextColor={theme.text + '80'}
          secureTextEntry
        />
      </View>

      {/* Confirm Password */}
      <View style={[styles.inputBox, { borderColor: theme.primary, backgroundColor: theme.card }]}>
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="CONFIRM YOUR NEW PASSWORD"
          placeholderTextColor={theme.text + '80'}
          secureTextEntry
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate('PasswordChangeSuccessfully')}
      >
        <Text style={[styles.btnText, { color: theme.text }]}>
          Update Password
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25
  },

  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 25
  },

  inputBox: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 15
  },

  input: {
    fontSize: 16
  },

  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 16
  }

});