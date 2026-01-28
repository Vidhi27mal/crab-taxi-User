import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

// import SplashScreen from "../screens/SplashScreen";
// import WelcomeScreen from '../screens/WelcomeScreen'
import Login from '../screens/Login'
import Register from '../screens/Register'
import OtpScreen from "../screens/OtpScreen";
import PlanRide from "../screens/PlanRide";
import RideDetails from "../screens/RideDetails";
import SelectVehicle from "../screens/SelectVehicle";
import MatchingDriver from "../screens/MatchingDiver";
import PickupMap from "../screens/PickupMap";


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}> 

            {/* <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
            <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen> */}
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>
            <Stack.Screen name="OtpScreen" component={OtpScreen}></Stack.Screen>
            <Stack.Screen name="PlanRide" component={PlanRide}></Stack.Screen>
            <Stack.Screen name="RideDetails" component={RideDetails}></Stack.Screen>
            <Stack.Screen name="SelectVehicle" component={SelectVehicle}></Stack.Screen>
            <Stack.Screen name="MatchingDriver" component={MatchingDriver}></Stack.Screen>
            <Stack.Screen name="PickupMap" component={PickupMap}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}