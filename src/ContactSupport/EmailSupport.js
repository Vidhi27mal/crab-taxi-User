import { View, Text, TextInput, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'



const EmailSupport = () => {

    const [subject, setSubject] = useState('')
const [message, setMessage] = useState('')

const SendEmail = () => {
     const email = "helpcrabtaxi@gmail.com";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(err => 
        console.error('Error opening email client:', err)
    );  
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email Support</Text>

            <Text style={styles.text}>
                Our support team is available
                24/7 to assist you at 
                helpcrabtaxi@gmail.com
            </Text>

            <TextInput placeholder='Subject'
                style={styles.subjectInput}
                value={subject}
                onChangeText={setSubject}
                >     
            </TextInput>

            <TextInput placeholder='Message'
                style={styles.messageInput}
                multiline={true}
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
                >
            </TextInput>

            <TouchableOpacity style={styles.sendBtn} onPress={SendEmail}>
                <Text style={styles.btnText}>Send Email</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#00bf63",
        textAlign: "center",
        marginVertical: 40,
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    subjectInput: {
        borderWidth: 2,
        borderColor: "#00bf63",
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 30,
        marginHorizontal: 20,
        fontSize: 16,
    },
    messageInput: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: "#00bf63",
        borderRadius: 10,
        height: 300,
        paddingTop: 15,
        textAlignVertical: "top",
        marginBottom: 40,
        paddingHorizontal: 15,
        marginHorizontal: 20,
    },
    sendBtn: {
        backgroundColor: "#00bf63",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
    },
    btnText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },
})

export default EmailSupport