
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = ({ navigation }) => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email format");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // clear form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigation.navigate("OtpScreen", { email });

  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
          >
            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">

        <View style={styles.content}>
        
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.subtitle}>Create an Account</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#000"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Icon name="account-check" size={22} color="#00bf63" style={styles.inputIcon} />
            </View>


            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
              />
              <Icon name="email-check" size={22} color="#00bf63" style={styles.inputIcon} />
            </View>


            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye-off" : "eye"}
                  size={22}
                  color="#00bf63"
                  style={styles.inputIcon}
                />
              </TouchableOpacity>
            </View>


            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#000"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Icon
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={22}
                  color="#00bf63"
                  style={styles.inputIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>

        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
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
    color: '#00bf63',
    marginBottom: 24,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00bf63',
    borderRadius: 8,
    marginBottom: 15,
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

});

export default Register;