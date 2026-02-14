import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

export default function ChatSupport() {

  const { theme } = useContext(ThemeContext);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Thank you', from: 'support' }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now().toString(), text: message, from: 'user' }
    ]);
    setMessage('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBox,
        item.from === 'user'
          ? { alignSelf: 'flex-end', backgroundColor: theme.primary }
          : { alignSelf: 'flex-start', backgroundColor: theme.card }
      ]}
    >
      <Text style={[styles.messageText, { color: theme.text }]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <View
        style={[
          styles.inputContainer,
          { borderColor: theme.border }
        ]}
      >
        <TextInput
          placeholder="Type your message..."
          placeholderTextColor={theme.text}
          value={message}
          onChangeText={setMessage}
          style={[
            styles.input,
            {
              borderColor: theme.border,
              color: theme.text
            }
          ]}
        />

        <TouchableOpacity
          style={[styles.sendBtn, { backgroundColor: theme.primary }]}
          onPress={sendMessage}
        >
          <Ionicons name="send" size={20} color={theme.buttonText} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },

  messageBox: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6
  },

  messageText: {
    fontSize: 15
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingVertical: 10
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10
  },

  sendBtn: {
    padding: 12,
    borderRadius: 25
  }
});