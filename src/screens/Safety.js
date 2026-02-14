import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from "../Theme/ThemeContext";

export default function SafetyScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: theme.primary },
        ]}
      >
        Safety
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate('Emergency')}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Emergency SOS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate('LiveTracking')}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Live Ride Tracking
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 50,
    textAlign: 'center',
  },

  option: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
});