import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ThemeContext } from "../Theme/ThemeContext";

export default function PrivacyPolicyScreen() {
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
        Privacy Policy
      </Text>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.card,
            { borderColor: theme.primary },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: theme.text },
            ]}
          >
            We use this information to operate the app, pay you,
            verify your identity, and ensure safety. We share
            some information with riders (like your location
            during a trip and your car details) and with our
            business partners (like payment processors) only
            when necessary. We use strong security to protect
            your data.
          </Text>

          <Text
            style={[
              styles.text,
              { color: theme.text },
            ]}
          >
            You can always ask to see the information we have
            about you and request corrections. If you have a
            problem, contact our Privacy Officer first. You can
            also complain to the federal Privacy Commissioner.
          </Text>
        </View>
      </ScrollView>
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
    marginBottom: 25,
  },

  card: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 20,
    marginTop: 20,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 18,
  },
});