import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CallSupportScreen() {
    const handleCall = () => {
        Linking.openURL('tel:+911234567890');
    };

    return (
        <View style={styles.container}>


            <Text style={styles.header}>Privacy Policy</Text>


            <View style={styles.card}>
                <Text style={styles.question}>We use this information to ope
                    rate the app, pay you, verify
                    your identity, and ensure
                    safety. We share some
                    information with riders (like
                    your location during a trip and
                    your car details) and with our
                    business partners (like
                    payment processors) only
                    when necessary. We use strong
                    security to protect your data.
                    </Text>
                   <Text style={styles.question}>
                    You can always ask to see the
                    information we have about you
                    and request corrections. If you
                    have a problem, contact our
                    Privacy Officer first. You can
                    also complain to the federal
                    Privacy Commissioner.</Text>


            </View>


            
        </View>
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 40
    },

    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        color: '#22B573',
        marginBottom: 25
    },

    card: {
        borderWidth: 3,
        borderColor: '#22B573',
        borderRadius: 12,
        padding: 20,
        marginTop: 30
    },

    question: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        marginBottom: 10,
        marginTop: 18,
    },

    info: {
        fontSize: 18,
        color: '#000',
        marginBottom: 20,
        lineHeight: 20,
        marginTop: 20,
        marginBottom: 50,
    },

    bold: {
        fontWeight: '700'
    },

    label: {
        fontSize: 18,
        color: '#000',
        marginBottom: 4
    },

    phone: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },

    button: {
        backgroundColor: '#22B573',
        paddingVertical: 14,
        borderRadius: 10,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        alignItems: 'center',
        marginTop: -40
    },

    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',

    }
});