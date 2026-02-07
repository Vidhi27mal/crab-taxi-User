import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import BankAccount from '../screens/BankAccount'
import DebitCard from '../screens/DebitCard';
import HelpAndSupport from '../screens/helpAndSupport';
import PaymentRefundIssue from '../screens/PaymentRefundIssue'
import PaymentFailed from '../screens/PaymentFailed';
import ChargedButRideNotCompleted from '../screens/ChargedButRideNotCompleted';
import RefundStatus from '../screens/RefundStatus';
import RideCancellationIssue from '../screens/RideCancellationIssue';
import RideCancelledByDriver from '../screens/RideCancelledByDriver'
import CantCancelRide from '../screens/CantCancelRide'
import RideCancelConfirm from '../screens/RideCancelConfirm'
import ContactSupport from '../screens/ContactSupport';
import ChatSupport from '../screens/ChatSupport';
import CallSupportScreen from '../screens/CallSupportScreen';
import IssueTyped from '../screens/IssueTyped';
import Settings from '../screens/Settings';
import ResetPassword from '../screens/ResetPassword';
import PasswordChangeSuccessfully from '../screens/PasswordChangeSuccesfully';
import ChooseMap from '../screens/ChooseMap';
import MapViewUpdate from '../screens/MapViewUpdate';
import ReferFriend from '../screens/ReferFriend';
import FriendLink from '../screens/FriendsLink';
import Privacy from '../screens/Privacy'
import Safety from '../screens/Safety'
import Emergency from '../screens/Emergency'
import LiveTracking from '../screens/LiveTracking'
import Inbox from '../screens/Inbox'
import SplashScreen from '../screens/SplashScreen'

import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
        
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="BankAccount" component={BankAccount} options={{ headerTitle: '' }} />
        <Stack.Screen
          name="DebitCard"
          component={DebitCard}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 20 }}>

              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="PaymentRefundIssue"
          component={PaymentRefundIssue}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="PaymentFailed"
          component={PaymentFailed}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="ChargedButRideNotCompleted"
          component={ChargedButRideNotCompleted}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="RefundStatus"
          component={RefundStatus}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="RideCancellationIssue"
          component={RideCancellationIssue}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="RideCancelledByDriver"
          component={RideCancelledByDriver}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="CantCancelRide"
          component={CantCancelRide}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="RideCancelConfirm"
          component={RideCancelConfirm}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="ContactSupport"
          component={ContactSupport}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="ChatSupport"
          component={ChatSupport}
          options={{ headerTitle: '' }}
        />

        <Stack.Screen
          name="CallSupportScreen"
          component={CallSupportScreen}
          options={{ headerTitle: '' }}
        />

        <Stack.Screen
          name="IssueTyped"
          component={IssueTyped}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="PasswordChangeSuccessfully"
          component={PasswordChangeSuccessfully}
          options={{ headerTitle: '' }}
        />

        <Stack.Screen
          name="ChooseMap"
          component={ChooseMap}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="MapViewUpdate"
          component={MapViewUpdate}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="ReferFriend"
          component={ReferFriend}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="FriendLink"
          component={FriendLink}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="Safety"
          component={Safety}
          options={{ headerTitle: '' }}
        />

        <Stack.Screen
          name="Emergency"
          component={Emergency}
          options={{ headerTitle: '' }}
        />

        <Stack.Screen
          name="LiveTracking"
          component={LiveTracking}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{ headerTitle: '' }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}