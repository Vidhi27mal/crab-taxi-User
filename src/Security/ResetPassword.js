import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext'; // adjust path if needed

export default function Settings({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <Text style={[styles.title, { color: colors.primary }]}>
        Reset Password
      </Text>

      {/* Current Password */}
      <View style={[styles.inputBox, { borderColor: colors.primary, backgroundColor: colors.card }]}>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="TYPE YOUR CURRENT PASSWORD"
          placeholderTextColor={colors.text + '80'}
          secureTextEntry
        />
      </View>

      {/* New Password */}
      <View style={[styles.inputBox, { borderColor: colors.primary, backgroundColor: colors.card }]}>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="TYPE YOUR NEW PASSWORD"
          placeholderTextColor={colors.text + '80'}
          secureTextEntry
        />
      </View>

      {/* Confirm Password */}
      <View style={[styles.inputBox, { borderColor: colors.primary, backgroundColor: colors.card }]}>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="CONFIRM YOUR NEW PASSWORD"
          placeholderTextColor={colors.text + '80'}
          secureTextEntry
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('PasswordChangeSuccessfully')}
      >
        <Text style={[styles.btnText, { color: colors.background }]}>
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