import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../Theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PaymentRefundIssue({ navigation }) {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

     <TouchableOpacity
             style={styles.header}
             onPress={() => navigation.navigate('HelpAndSupport')}
           >
             <Icon
               name="close"
               size={28}
               color={"red"}
               style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
             />
             <Text style={[styles.headerText, { color: theme.primary }]}>
               Payment & Refund Issues
             </Text>
           </TouchableOpacity>
     

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => navigation.navigate('PaymentFailed')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Payment Failed
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => navigation.navigate('ChargedButRideNotCompleted')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Charged but Ride not Completed
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          {
            borderColor: theme.primary,
            backgroundColor: theme.card
          }
        ]}
        onPress={() => navigation.navigate('RefundStatus')}
      >
        <Text style={[styles.optionText, { color: theme.text }]}>
          Refund Status
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 25,
    fontWeight: '700',
  },

  option: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 18,
    marginBottom: 19
  },

  optionText: {
    fontSize: 18,
    fontWeight: '500'
  }
});