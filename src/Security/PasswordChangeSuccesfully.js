import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext'; 

export default function RideCancelConfirmed({ navigation }) {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={[styles.iconWrapper, { backgroundColor: colors.primary }]}>
        <Ionicons name="checkmark" size={90} color={colors.background} />
      </View>

      <Text style={[styles.title, { color: colors.text }]}>
        Password Changed
      </Text>

      <Text style={[styles.subtitle, { color: colors.text }]}>
        Successfully
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});