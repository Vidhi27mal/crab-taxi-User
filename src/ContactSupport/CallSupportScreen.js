import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

export default function CallSupportScreen() {

  const { theme } = useContext(ThemeContext);

  const handleCall = () => {
    Linking.openURL('tel:+911234567890');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Title */}
      <Text style={[styles.header, { color: theme.primary }]}>
        Call Support
      </Text>

      {/* Card */}
      <View style={[styles.card, { borderColor: theme.primary }]}>
        <Text style={[styles.question, { color: theme.text }]}>
          Need immediate help?
        </Text>

        <Text style={[styles.info, { color: theme.text }]}>
          Our support team is available{'\n'}
          <Text style={styles.bold}>24/7</Text> to assist you.
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>
          Support Number:
        </Text>

        <Text style={[styles.phone, { color: theme.text }]}>
          +91 123 456 7890
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleCall}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Call Now
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40
  },

  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 25
  },

  card: {
    borderWidth: 3,
    borderRadius: 12,
    padding: 20,
    marginTop: 30
  },

  question: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 40,
    marginTop: 18,
  },

  info: {
    fontSize: 18,
    marginBottom: 50,
    lineHeight: 22,
    marginTop: 20,
  },

  bold: {
    fontWeight: '700'
  },

  label: {
    fontSize: 18,
    marginBottom: 4
  },

  phone: {
    fontSize: 18,
    fontWeight: '600'
  },

  button: {
    paddingVertical: 14,
    borderRadius: 10,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  }
});