import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from "../Theme/ThemeContext";
import Icon from 'react-native-vector-icons/Ionicons';

export default function SafetyScreen({ navigation }) {
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
               Safety
             </Text>
           </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate('Emergency')}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Emergency SOS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          { borderColor: theme.primary },
        ]}
        onPress={() => navigation.navigate('LiveTracking')}
      >
        <Text
          style={[
            styles.optionText,
            { color: theme.text },
          ]}
        >
          Live Ride Tracking
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 65,
    fontSize: 30,
    fontWeight: '700',
  },

  option: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500',
  },
});