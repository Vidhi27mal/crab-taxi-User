import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

const PastRides = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Activity")}
      >
        <Icon
          name="close"
          size={28}
          color={theme.primary}
          style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
        />

        <Text style={[styles.headerText, { color: theme.primary }]}>
          Past Rides
        </Text>
      </TouchableOpacity>

      <ScrollView>

        {[1, 2, 3, 4, 5].map((ride) => (
          <TouchableOpacity
            key={ride}
            style={[styles.item, { borderColor: theme.primary }]}
          >
            <Text style={[styles.itemText, { color: theme.text }]}>
              Past Ride {ride}
            </Text>

            <Icon
              name="time-outline"
              size={24}
              color={theme.primary}
            />
          </TouchableOpacity>
        ))}

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PastRides;