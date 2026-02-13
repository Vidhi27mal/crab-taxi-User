import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

export default function ChargedButRideNotCompleted({ navigation }) {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Charged but Ride Not Completed
      </Text>

      {/* Trip Summary */}
      <View style={[
        styles.card,
        { borderColor: theme.primary, backgroundColor: theme.card }
      ]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Trip Summary
        </Text>
      </View>

      {/* Amount Charged */}
      <View style={[
        styles.card,
        { borderColor: theme.primary, backgroundColor: theme.card }
      ]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Amount Charged : $__
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Request Refund
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    marginTop: 20
  },

  sectionTitle: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: 18
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },

  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 'auto'   // ✅ better than marginTop:380
  },

  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600'
  }
});