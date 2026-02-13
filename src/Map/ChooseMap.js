import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

export default function ChooseMap({ navigation }) {

  const { theme } = useContext(ThemeContext);
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.primary }]}>
        Choose a Map
      </Text>

      {/* Google Map */}
      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => setSelectedMap('google')}
      >
        <Ionicons
          name={
            selectedMap === 'google'
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={22}
          color={theme.primary}
        />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Google Maps
        </Text>
      </TouchableOpacity>

      {/* Apple Map */}
      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => setSelectedMap('apple')}
      >
        <Ionicons
          name={
            selectedMap === 'apple'
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={22}
          color={theme.primary}
        />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Apple Map
        </Text>
      </TouchableOpacity>

      {/* Default Map */}
      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => setSelectedMap('default')}
      >
        <Ionicons
          name={
            selectedMap === 'default'
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={22}
          color={theme.primary}
        />
        <Text style={[styles.optionText, { color: theme.text }]}>
          Default Map
        </Text>
      </TouchableOpacity>

      {/* Apply Button */}
      <TouchableOpacity
        style={[
          styles.applyButton,
          {
            backgroundColor: selectedMap
              ? theme.primary
              : theme.card
          }
        ]}
        disabled={!selectedMap}
        onPress={() => {
          navigation.navigate('MapViewUpdate', {
            selectedMap: selectedMap,
          });
        }}
      >
        <Text style={[styles.applyText, { color: theme.text }]}>
          Apply
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
    fontSize: 33,
    fontWeight: '600',
    marginBottom: 25,
  },

  option: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 30,
    paddingHorizontal: 15
  },

  optionText: {
    fontSize: 16,
    marginLeft: 12,
  },

  applyButton: {
    marginTop: 200,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },

  applyText: {
    fontSize: 16,
    fontWeight: '600'
  }
});