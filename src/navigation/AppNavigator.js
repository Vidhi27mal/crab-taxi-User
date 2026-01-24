import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

// import SplashScreen from "../screens/SplashScreen";
// import WelcomeScreen from '../screens/WelcomeScreen'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}> 

            {/* <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
            <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen> */}
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}