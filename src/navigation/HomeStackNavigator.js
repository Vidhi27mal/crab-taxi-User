import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PlanRide from '../screens/PlanRide';
import RideDetails from '../screens/RideDetails';
import SelectVehicle from '../screens/SelectVehicle';
import MatchingDriver from '../screens/MatchingDriver';
import PickupMap from '../screens/PickupMap';
import ShareOtp from '../screens/ShareOtp';
import RideCompleted from '../screens/RideCompleted';
import DriverTip from '../screens/DriverTip'; 
import Summary from '../screens/Summary';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="PlanRide" component={PlanRide}></Stack.Screen>
            <Stack.Screen name="RideDetails" component={RideDetails}></Stack.Screen>
            <Stack.Screen name="SelectVehicle" component={SelectVehicle}></Stack.Screen>
            <Stack.Screen name="MatchingDriver" component={MatchingDriver}></Stack.Screen>
            <Stack.Screen name="PickupMap" component={PickupMap}></Stack.Screen>
            <Stack.Screen name="ShareOtp" component={ShareOtp}></Stack.Screen>
            <Stack.Screen name="RideCompleted" component={RideCompleted}></Stack.Screen>
            <Stack.Screen name="DriverTip" component={DriverTip}></Stack.Screen>
            <Stack.Screen name="Summary" component={Summary}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStackNavigator