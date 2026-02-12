import {  StyleSheet,  Text,  TouchableOpacity,  View,  Image } from 'react-native'

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.appName}>Crab Taxi</Text>
      
      <Image
        source={require('../assets/welcome.png')}
        style={styles.image}
        resizeMode="contain"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00bf63',
    marginTop: 80,
  },
  image: {
    width: '80%',
    height: 280,
    marginBottom: 80
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00bf63',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 110,
  },
  arrow: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 20
  },
})
