import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PlanRide from '../RideInfo/PlanRide';
import RideDetails from '../RideInfo/RideDetails';
import SelectVehicle from '../RideInfo/SelectVehicle';
import MatchingDriver from '../screens/MatchingDriver';
import PickupMap from '../RideInfo/PickupMap';
import ShareOtp from '../RideInfo/ShareOtp';
import RideCompleted from '../RideInfo/RideCompleted';
import DriverTip from '../RideInfo/DriverTip'; 


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
            
    </Stack.Navigator>
  )
}

export default HomeStackNavigator