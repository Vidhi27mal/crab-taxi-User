import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

const Wallet = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="close"
          size={28}
          color={theme.primary}
          style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          Wallet
        </Text>
      </TouchableOpacity>

      <View
        style={[
          styles.balanceContainer,
          { borderColor: theme.primary }
        ]}
      >
        <Text style={[styles.balanceLabel, { color: theme.text }]}>
          Balance
        </Text>

        <Text style={[styles.balance, { color: theme.primary }]}>
          $12.00
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.rechargeBtn,
          { backgroundColor: theme.primary }
        ]}
        onPress={()=>navigation.navigate('PaymentMethod')}
      >
        <Text style={[styles.rechargeText, { color: theme.buttonText }]}>
          RECHARGE YOUR WALLET
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.voucherBtn,
          { borderColor: theme.primary }
        ]}
      >
        <Text style={[styles.rechargeText, { color: theme.text }]}>
          HAVE A VOUCHER?
        </Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.transactionHistory,
          { color: theme.text }
        ]}
      >
        Transaction History
      </Text>

      <TouchableOpacity
        style={[
          styles.transactionItem,
          { borderColor: theme.primary }
        ]}
      >
        <Text style={[styles.transactionText, { color: theme.text }]}>
          Ride 1
        </Text>
        <Text style={[styles.transactionAmount, { color: theme.primary }]}>
          +$7.00
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.transactionItem,
          { borderColor: theme.primary }
        ]}
      >
        <Text style={[styles.transactionText, { color: theme.text }]}>
          Platform Fee
        </Text>
        <Text style={[styles.transactionAmount, { color: theme.primary }]}>
          -$5.00
        </Text>
      </TouchableOpacity>

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
    fontSize: 25,
    fontWeight: '700',
  },

  balanceContainer: {
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
  },

  balanceLabel: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: '600',
  },

  balance: {
    fontSize: 35,
    fontWeight: '700',
  },

  rechargeBtn: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },

  rechargeText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

  voucherBtn: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 13,
  },

  transactionHistory: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '700',
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },

  transactionText: {
    fontSize: 18,
    fontWeight: '600',
  },

  transactionAmount: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Wallet;