import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

 import SplashScreen from "../screens/SplashScreen";
import Welcome from "../screens/Welcome";
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import OtpScreen from "../Authentication/OtpScreen";
import DrawerNavigator from "./DrawerNavigator";


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}> 

             <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen> 
            
            <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>
            <Stack.Screen name="OtpScreen" component={OtpScreen}></Stack.Screen>

            <Stack.Screen name="Main" component={DrawerNavigator}></Stack.Screen>
           
        </Stack.Navigator>
    </NavigationContainer>
  )
}