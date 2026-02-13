import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';

export default function IssueTyped() {

  const { theme } = useContext(ThemeContext);
  const [issue, setIssue] = useState('');

  const handleSubmit = () => {
    if (!issue.trim()) {
      Alert.alert("Error", "Please type your issue first");
      return;
    }

    Alert.alert("Success", "Your complaint has been submitted");
    setIssue('');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Submit Complaint
      </Text>

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
          Type Your Issue
        </Text>

        <TextInput
          style={[
            styles.input,
            {
              color: theme.text,
              borderColor: theme.primary
            }
          ]}
          placeholder="Type your issue here..."
          placeholderTextColor={theme.text}
          multiline
          value={issue}
          onChangeText={setIssue}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Submit
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
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 40,
    marginTop: 20,
    textAlign: 'center'
  },

  card: {
    borderWidth: 3,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20
  },

  label: {
    fontSize: 17,
    marginBottom: 10
  },

  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top'
  },

  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600'
  }
});