import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatSupport() {
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
        item.from === 'user' ? styles.userMsg : styles.supportMsg
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 15
    },
  
    messageBox: {
      maxWidth: '75%',
      padding: 12,
      borderRadius: 10,
      marginVertical: 6
    },
  
    userMsg: {
      alignSelf: 'flex-end',
      backgroundColor: '#000'
    },
  
    supportMsg: {
      alignSelf: 'flex-start',
      backgroundColor: 'grey'
    },
  
    messageText: {
      color: '#fff',
      
    },
  
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#ddd',
      paddingVertical: 10
    },
  
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginRight: 10
    },
  
    sendBtn: {
      backgroundColor: '#000',
      padding: 12,
      borderRadius: 25
    }
  });