import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = () => {
    let valid = true;
    if (!username) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (!valid) {
      return;
    }
    
    setUsername('');
    setPassword('');

    navigation.replace('Main');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };


  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent} >

        <View style={styles.content}>

          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.subtitle}>Enter your login Details</Text>

            <View style={[styles.inputContainer, usernameError ? styles.errorInput : null]}>

              <TextInput
                style={styles.input}
                placeholder="Enter Username"
                placeholderTextColor="#000"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  setUsernameError('');
                }}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Icon name="person" size={22} color="#00bf63" style={styles.inputIcon} />
            </View>
            {usernameError ? (
              <Text style={styles.errorText}>{usernameError}</Text>
            ) : null}

            <View style={[styles.inputContainer, passwordError ? styles.errorInput : null]}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#000"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError('');
                }}
                autoCapitalize="none"
                disableFullscreenUI={true}
              />
              <Icon name="lock-closed" size={22} color="#00bf63" style={styles.inputIcon} />
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>New? Register Here</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 100,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    paddingVertical: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00bf63',
    borderRadius: 8,
    marginBottom: 30,
  },
  inputIcon: {
    padding: 10,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#00bf63',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },

  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: -20,
    marginBottom: 15,
    marginLeft: 5,
  },
});

export default Login;