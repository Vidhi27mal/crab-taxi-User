import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HelpAndSupport({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Icon name="close" style={styles.closeIcon} />


                <Text style={styles.title}>Help & Support</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => navigation.navigate('PaymentRefundIssue')}>
                        <Text style={styles.optionText}>Payment / Refund Issue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => navigation.navigate('RideCancellationIssue')}>
                        <Text style={styles.optionText}>Ride / Cancellation Issue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => navigation.navigate('ContactSupport')}>
                        <Text style={styles.optionText}>Contact Support</Text>
                    </TouchableOpacity>




                </View>

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
        borderWidth: 2,
        borderColor: '#2ECC71',
        borderRadius: 12,
        padding: 18,
        marginBottom: 17
    },
    optionText: {
        fontSize: 18,
        color: '#111',
        fontWeight: '500'
    }
});