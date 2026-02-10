import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HelpAndSupport({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Safety</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('Emergency')}>
                <Text style={styles.optionText}>Emergency SOS</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('LiveTracking')}>
                <Text style={styles.optionText}>Live Ride Tracking</Text>
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