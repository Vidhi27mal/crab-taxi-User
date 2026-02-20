import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from "../Theme/ThemeContext";

export default function ReferFriendScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  const referralCode = "ABCD1234";

  const onShare = async () => {
    try {
      await Share.share({
        message:
          `Hey! Use my referral code ${referralCode} and get free ride credits on GrabTaxi! 🚕`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* Header */}
      <Text
        style={[
          styles.header,
          { color: theme.primary },
        ]}
      >
        Refer A Friend
      </Text>

      {/* Referral Card */}
      <View
        style={[
          styles.card,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card,
          },
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
          {referralCode}
        </Text>
      </View>

      {/* Social Media Share Icons */}
      <View style={styles.socialContainer}>

        <TouchableOpacity
          style={[
            styles.socialIcon,
            { backgroundColor: theme.card },
          ]}
          onPress={onShare}
        >
          <Ionicons
            name="logo-whatsapp"
            size={28}
            color={theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.socialIcon,
            { backgroundColor: theme.card },
          ]}
          onPress={onShare}
        >
          <Ionicons
            name="logo-instagram"
            size={28}
            color={theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.socialIcon,
            { backgroundColor: theme.card },
          ]}
          onPress={onShare}
        >
          <Ionicons
            name="paper-plane"
            size={28}
            color={theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.socialIcon,
            { backgroundColor: theme.card },
          ]}
          onPress={onShare}
        >
          <Ionicons
            name="mail"
            size={28}
            color={theme.primary}
          />
        </TouchableOpacity>

      </View>

      {/* Share Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.primary },
        ]}
        onPress={onShare}
      >
        <Text
          style={[
            styles.buttonText,
            { color: theme.background },
          ]}
        >
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

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },

  socialIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
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
  },

});