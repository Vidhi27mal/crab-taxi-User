import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

export default function RefundStatus() {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Refund Status
      </Text>

      {/* Refund Details */}
      <View
        style={[
          styles.card,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
      >
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Status : In Process
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.card,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
      >
        <Text style={[styles.label, { color: theme.text }]}>
          Expected Time : 3-5 days
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 60,
    marginTop: 20,
    textAlign: 'center'
  },

  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  label: {
    fontSize: 17
  }
});