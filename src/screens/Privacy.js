import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { ThemeContext } from "../Theme/ThemeContext";
import Icon from 'react-native-vector-icons/Ionicons';

export default function PrivacyPolicyScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Settings')}
      >
        <Icon
          name="close"
          size={28}
          color={"red"}
          style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Privacy Policy
        </Text>
      </TouchableOpacity>

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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 35,
    fontSize: 30,
    fontWeight: '700',
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