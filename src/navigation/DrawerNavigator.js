import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../screens/CustomDrawer';
import HomeStackNavigator from './HomeStackNavigator';
import Profile from '../UserProfile/Profile';
import InboxStackNavigator from './InboxStackNavigator';
import Activity from '../RideHistory/Acitivity';
import UpcomingRIdes from '../RideHistory/UpcomingRides';
import PastRides from '../RideHistory/PastRides';
import Wallet from '../Payments/wallet';
import PaymentMethod from '../Payments/PaymentMethod';
import BankAccount from '../Payments/BankAccount'
import DebitCard from '../Payments/DebitCard';
import HelpAndSupport from '../screens/HelpAndSupport';
import PaymentRefundIssue from '../PaymentIssue/PaymentRefundIssue'
import PaymentFailed from '../PaymentIssue/PaymentFailed';
import ChargedButRideNotCompleted from '../PaymentIssue/ChargedButRideNotCompleted';
import RefundStatus from '../PaymentIssue/RefundStatus';
import RideCancellationIssue from '../RideIssue/RideCancellationIssue';
import RideCancelledByDriver from '../RideIssue/RideCancelledByDriver'
import CantCancelRide from '../RideIssue/CantCancelRide'
import RideCancelConfirm from '../RideIssue/RideCancelConfirm'
import ContactSupport from '../ContactSupport/ContactSupport';
import ChatSupport from '../ContactSupport/ChatSupport';
import CallSupportScreen from '../ContactSupport/CallSupportScreen';
import IssueTyped from '../ContactSupport/IssueTyped';
import Settings from '../screens/Settings';
import ResetPassword from '../Security/ResetPassword';
import PasswordChangeSuccessfully from '../Security/PasswordChangeSuccesfully';
import ChooseMap from '../Map/ChooseMap';
import MapViewUpdate from '../Map/MapViewUpdate';
import ReferFriend from '../screens/ReferFriend';
import FriendLink from '../screens/FriendsLink';
import Privacy from '../screens/Privacy'
import Safety from '../screens/Safety'
import Emergency from '../Safety/Emergency'
import LiveTracking from '../RideIssue/LiveTracking'
import EmailSupport from '../ContactSupport/EmailSupport';
import Etransfer from '../Payments/Etransfer';

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

   
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Inbox" component={InboxStackNavigator}/>
      <Drawer.Screen name="Activity" component={Activity} />
      <Drawer.Screen name='UpcomingRides' component={UpcomingRIdes}/>
      <Drawer.Screen name='PastRides' component={PastRides}/>
      <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="PaymentMethod" component={PaymentMethod} />
        <Drawer.Screen name="BankAccount" component={BankAccount} options={{ headerTitle: '' }} />
        <Drawer.Screen name="DebitCard" component={DebitCard} options={{ headerTitle: '' }} />
        <Drawer.Screen name="Etransfer" component={Etransfer} options={{ headerTitle: '' }} />
        
        <Drawer.Screen
          name="Help"
          component={HelpAndSupport}
          options={{ headerTitle: '' }}
        />
        
        <Drawer.Screen
          name="PaymentRefundIssue"
          component={PaymentRefundIssue}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="PaymentFailed"
          component={PaymentFailed}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ChargedButRideNotCompleted"
          component={ChargedButRideNotCompleted}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RefundStatus"
          component={RefundStatus}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancellationIssue"
          component={RideCancellationIssue}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancelledByDriver"
          component={RideCancelledByDriver}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="CantCancelRide"
          component={CantCancelRide}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancelConfirm"
          component={RideCancelConfirm}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ContactSupport"
          component={ContactSupport}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ChatSupport"
          component={ChatSupport}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="CallSupportScreen"
          component={CallSupportScreen}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="IssueTyped"
          component={IssueTyped}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="PasswordChangeSuccessfully"
          component={PasswordChangeSuccessfully}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="ChooseMap"
          component={ChooseMap}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="MapViewUpdate"
          component={MapViewUpdate}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ReferFriend"
          component={ReferFriend}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="FriendLink"
          component={FriendLink}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Safety"
          component={Safety}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="Emergency"
          component={Emergency}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="LiveTracking"
          component={LiveTracking}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="EmailSupport"
          component={EmailSupport}
          options={{ headerTitle: '' }}
        />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;