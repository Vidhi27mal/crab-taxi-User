import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useTheme } from '../component/ThemeContext'

export default function Welcome({ navigation }) {

  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.appName, { color: theme.primary }]}>
        Crab Taxi
      </Text>

      <Image
        source={require('../assets/welcome.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Get Started
        </Text>

        <Text style={[styles.arrow, { color: theme.buttonText }]}>
          →
        </Text>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },

  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 80,
  },

  image: {
    width: '80%',
    height: 280,
    marginBottom: 80
  },

  button: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 110,
  },

  arrow: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 20
  },

})