import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';

import { useTheme } from '../Theme/ThemeContext'; 

const EmailSupport = () => {

    const { theme } = useTheme();

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const SendEmail = () => {
        const email = "helpcrabtaxi@gmail.com";

        const url =
            `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        Linking.openURL(url).catch(err =>
            console.error('Error opening email client:', err)
        );
    };

    const styles = createStyles(theme);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Email Support
            </Text>

            <Text style={styles.text}>
                Our support team is available 24/7 to assist you at
                {"\n"}helpcrabtaxi@gmail.com
            </Text>

            <TextInput
                placeholder="Subject"
                placeholderTextColor={theme.textSecondary}
                style={styles.subjectInput}
                value={subject}
                onChangeText={setSubject}
            />

            <TextInput
                placeholder="Message"
                placeholderTextColor={theme.textSecondary}
                style={styles.messageInput}
                multiline={true}
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
            />

            <TouchableOpacity
                style={styles.sendBtn}
                onPress={SendEmail}
            >
                <Text style={styles.btnText}>
                    Send Email
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default EmailSupport;



const createStyles = (theme) =>
    StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: theme.background,
        },

        title: {
            fontSize: 30,
            fontWeight: "bold",
            color: theme.primary,
            textAlign: "center",
            marginVertical: 40,
        },

        text: {
            fontSize: 18,
            paddingHorizontal: 20,
            marginBottom: 30,
            color: theme.text,
        },

        subjectInput: {
            borderWidth: 2,
            borderColor: theme.primary,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 15,
            marginBottom: 30,
            marginHorizontal: 20,
            fontSize: 16,
            color: theme.text,
            backgroundColor: theme.card,
        },

        messageInput: {
            fontSize: 16,
            borderWidth: 2,
            borderColor: theme.primary,
            borderRadius: 10,
            height: 300,
            paddingTop: 15,
            textAlignVertical: "top",
            marginBottom: 40,
            paddingHorizontal: 15,
            marginHorizontal: 20,
            color: theme.text,
            backgroundColor: theme.card,
        },

        sendBtn: {
            backgroundColor: theme.primary,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 30,
        },

        btnText: {
            color: theme.buttonText,
            fontSize: 18,
            fontWeight: "bold",
        },

    });