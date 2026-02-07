import React, { useState } from 'react';
import {View,Text,TouchableOpacity,StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChooseMap({ navigation }) {
    const [selectedMap, setSelectedMap] = useState(null);

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Choose a Map</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => setSelectedMap('google')}
            >
                <Ionicons
                    name={
                        selectedMap === 'google'
                            ? 'radio-button-on'
                            : 'radio-button-off'
                    }
                    size={22}
                    color="#2ECC71"
                />
                <Text style={styles.optionText}>Google Maps</Text>
            </TouchableOpacity>

            {/* Apple Maps */}
            <TouchableOpacity
                style={styles.option}
                onPress={() => setSelectedMap('apple')}
            >
                <Ionicons
                    name={
                        selectedMap === 'apple'
                            ? 'radio-button-on'
                            : 'radio-button-off'
                    }
                    size={22}
                    color="#2ECC71"
                />
                <Text style={styles.optionText}>Apple Map</Text>
            </TouchableOpacity>

            {/* Default Maps */}
            <TouchableOpacity
                style={styles.option}
                onPress={() => setSelectedMap('default')}
            >
                <Ionicons
                    name={
                        selectedMap === 'default'
                            ? 'radio-button-on'
                            : 'radio-button-off'
                    }
                    size={22}
                    color="#2ECC71"
                />
                <Text style={styles.optionText}>Default Map</Text>
            </TouchableOpacity>

            {/* Apply Button */}
            <TouchableOpacity
                style={[
                    styles.applyButton,
                    !selectedMap
                ]}
                disabled={!selectedMap}
                onPress={() => {
                    console.log('Selected Map:', selectedMap);
                  navigation.navigate('MapViewUpdate' , {
                    selectedMap: selectedMap,
                  });
                }}
            >
                <Text style={styles.applyText} >
                Apply</Text>
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
        fontWeight: '600',
        marginBottom: 25,
        color: '#2ECC71'
    },

    option: {
        borderWidth: 2,
        borderRadius:10,
        borderColor: '#2ECC71',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 30
    },

    optionText: {
        fontSize: 16,
        marginLeft: 12,
        color: '#000'
    },

    applyButton: {
        marginTop: 400,
        backgroundColor: '#2ECC71',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center'
    },

    applyText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    }
});