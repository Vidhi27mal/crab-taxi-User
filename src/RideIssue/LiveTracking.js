import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LiveRideTracking() {
    return (
        <View style={styles.container}>
            <View style={styles.rightSection}>
                <Text style={styles.title}>Live Ride Tracking</Text>

                

                <WebView
                    source={{
                        uri:
                            'https://www.google.com/maps/dir/?api=1&origin=19.0760,72.8777&destination=19.0896,72.8656&travelmode=driving',
                    }}
                    style={styles.map}
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },



    rightSection: {
        flex: 1,
    },

    title: {
        color: '#2ECC71',
        fontSize: 33,
        fontWeight: '600',
        marginBottom: 16,
    },
   map: {
        flex: 1,
    },
});