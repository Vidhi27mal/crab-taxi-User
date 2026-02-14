import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ThemeContext } from "../Theme/ThemeContext";

export default function ReferFriendScreen({ navigation }) {
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
          styles.header,
          { color: theme.primary },
        ]}
      >
        Refer A Friend
      </Text>

      <View
        style={[
          styles.card,
          { borderColor: theme.primary },
        ]}
      >
        <Text
          style={[
            styles.question,
            { color: theme.text },
          ]}
        >
          Invite friends and earn ride credits!
        </Text>

        <Text
          style={[
            styles.info,
            { color: theme.text },
          ]}
        >
          Your Referral Code:
        </Text>

        <Text
          style={[
            styles.code,
            { color: theme.primary },
          ]}
        >
          ABCD1234
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.primary },
        ]}
        onPress={() => navigation.navigate('FriendLink')}
      >
        <Text style={styles.buttonText}>
          Share Invite
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
  },

  card: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 24,
    marginTop: 20,
  },

  question: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
  },

  info: {
    fontSize: 16,
    textAlign: 'center',
  },

  code: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});