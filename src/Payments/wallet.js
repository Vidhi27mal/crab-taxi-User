import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const wallet = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Icon name="close" style={styles.closeIcon} />
        <Text style={styles.headerText}>Wallet</Text>
      </TouchableOpacity>

        <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balance}>$12.00</Text>
        </View>

        <TouchableOpacity style={styles.rechargeBtn}>
            <Text style={styles.rechargeText}>RECHARGE YOUR WALLET</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.voucherBtn}>
            <Text style={styles.rechargeText}>HAVE A VOUCHER?</Text>
        </TouchableOpacity>

        <Text style={styles.transactionHistory}>Transaction History</Text>
        <TouchableOpacity style={styles.transactionItem}>
            <Text style={styles.transactionText}>Ride 1</Text>
            <Text style={styles.transactionAmount}>+$7.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transactionItem}>
            <Text style={styles.transactionText}>Platform Fee</Text>
            <Text style={styles.transactionAmount}>-$5.00</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    },
    closeIcon: {
   fontSize: 30,
   color: 'red',
   fontWeight: '700',
   borderWidth: 3,
    borderColor: '#00bf63',
    },
    headerText: {
    flex: 1,
    paddingHorizontal: 100,
    fontSize: 25,
    fontWeight: '700',
    color: '#00bf63',
   },
    balanceContainer: {
        height: 150,
        borderWidth: 3,
        borderColor: '#00bf63',
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
        color: '#00bf63',
    },
    rechargeBtn: {
        marginTop: 30,
        backgroundColor: '#00bf63',
        paddingVertical: 15,
        borderRadius: 10,
    },
    rechargeText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    voucherBtn: {
        marginTop: 20,
        borderWidth: 3,
        borderColor: '#00bf63',
        borderRadius: 10,
        paddingVertical: 13,
        borderRadius: 10,
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
        borderWidth: 3,
        borderColor: '#00bf63',
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
})
export default wallet