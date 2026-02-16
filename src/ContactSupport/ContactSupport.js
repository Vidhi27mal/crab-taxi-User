import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

export default function ContactSupport({ navigation }) {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Contact Support
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary
          }
        ]}
        onPress={() => navigation.navigate('ChatSupport')}
      >
        <Ionicons name="chatbubble-ellipses-outline" size={24} color={theme.text} />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Chat Support With Us
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary
          }
        ]}
        onPress={() => navigation.navigate('CallSupportScreen')}
      >
        <Ionicons name="call-outline" size={24} color={theme.text} />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Call With Us
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary
          }
        ]}
        onPress={() => navigation.navigate('EmailSupport')}
      >
        <Ionicons name="mail-outline" size={24} color={theme.text} />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Email Support
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary
          }
        ]}
        onPress={() => navigation.navigate('IssueTyped')}
      >
        <Ionicons name="document-text-outline" size={24} color={theme.text} />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Submit Complaint
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor: theme.card,
            borderColor: theme.primary
          }
        ]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings-outline" size={24} color={theme.text} />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Settings
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

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 12,
    marginTop: 15
  },

  optionText: {
    fontSize: 17,
    marginLeft: 15
  }
});