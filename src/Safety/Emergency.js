import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HelpAndSupport({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Emergency SOS</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('PaymentRefundIssue')}>
                <Text style={styles.optionText}>Emergency </Text>
            </TouchableOpacity>










        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        fontSize: 33,
        fontWeight: '700',
        color: '#2ECC71',
        marginTop: 15,
        marginBottom: 55,
        textAlign: 'center'
    },
    option: {
        backgroundColor: 'red',
        borderRadius: 12,
        padding: 24,
        marginBottom: 17
    },
    optionText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '500',
        textAlign: 'center'
    }
});