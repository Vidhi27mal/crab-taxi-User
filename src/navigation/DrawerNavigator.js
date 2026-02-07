import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from '../screens/CustomDrawer';
import HomeStackNavigator from './HomeStackNavigator';

import Profile from '../screens/Profile';
import InboxStackNavigator from './InboxStackNavigator';
import Activity from '../screens/Acitivity';
import UpcomingRIdes from '../screens/UpcomingRides';
import PastRides from '../screens/PastRides';
import Wallet from '../screens/wallet';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          width: 280,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />

      {/* Drawer Pages */}
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Inbox" component={InboxStackNavigator}/>
      <Drawer.Screen name="Activity" component={Activity} />
      <Drawer.Screen name='UpcomingRides' component={UpcomingRIdes}/>
      <Drawer.Screen name='PastRides' component={PastRides}/>
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;
