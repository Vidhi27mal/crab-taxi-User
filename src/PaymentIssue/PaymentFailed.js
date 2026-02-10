import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getLastPaymentMethod } from '../utils/PaymentStore';


export default function PaymentFailed({ navigation }) {
    const retryPayment = () => {
        const last = getLastPaymentMethod();

        if (last) {
            navigation.navigate(last);
        } else {
            navigation.navigate('Payment'); // Page-25
        }
    };
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Payment Failed!</Text>
            

            <TouchableOpacity style={styles.option} onPress={retryPayment}>
                <Text style={styles.optionText}>Retry Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('BankAccount')}>
                <Text style={styles.optionText}>change Payment Method</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 33,
        fontWeight: '700',
        color: '#00bf63',
        marginBottom: 14,
        marginTop: 22,
        textAlign: 'center'
    },
    
    option: {
        borderWidth: 1,
        borderColor: '#00bf63',
        borderRadius: 12,
        padding: 18,
        marginBottom: 10,
        marginTop: 25
    },
    optionText: {
        fontSize: 18,
        fontWeight: '500'
    }
});