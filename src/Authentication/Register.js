
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Register = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = () => {
    let valid = true;
    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
    if (!valid) {
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
              <Text style={styles.subtitle}>Create an Account</Text>

              <View style={[styles.inputContainer, usernameError ? styles.errorInput : null]}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#000"
                  value={username}
                  onChangeText={(text) => {
                    setUsername(text);
                    setUsernameError('');
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Icon name="account-check" size={22} color="#00bf63" style={styles.inputIcon} />
              </View>

              {usernameError ? (
                <Text style={styles.errorText}>{usernameError}</Text>
              ) : null}


              <View style={[styles.inputContainer, emailError ? styles.errorInput : null]}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#000"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    setEmailError('');
                  }}
                  keyboardType="email-address"
                  style={styles.input}
                />
                <Icon name="email-check" size={22} color="#00bf63" style={styles.inputIcon} />
              </View>
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}

              <View style={[styles.inputContainer, passwordError ? styles.errorInput : null]}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#000"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    setPasswordError('');
                  }}
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

              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}

              <View style={[styles.inputContainer, confirmPasswordError ? styles.errorInput : null]}>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="#000"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    setConfirmPasswordError('');
                  }}
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
              {confirmPasswordError ? (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              ) : null}
              <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.loginButtonText}>SIGN UP</Text>
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
  errorInput: {
  borderColor: 'red',
},
errorText: {
  color: 'red',
  fontSize: 14,
  marginTop: -10,
  marginBottom: 15,
  marginLeft: 5,
},
});

export default Register;