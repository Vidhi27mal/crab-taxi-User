import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from "../Theme/ThemeContext";

export default function Settings({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="close"
          size={28}
          color={"red"}
          style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Settings
        </Text>
      </TouchableOpacity>

      {/* Options */}

      <TouchableOpacity
        style={[styles.option, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Password Reset
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('ChooseMap')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Choose Map
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('ReferFriend')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Refer a Friend
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Privacy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate('Safety')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Safety
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 60,
    fontSize: 30,
    fontWeight: '700',
  },

  option: {
    padding: 18,
    borderRadius: 14,
    borderWidth: 2,
    marginBottom: 18,
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
});