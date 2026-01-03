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




import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}/>
       
        <Stack.Screen name="BankAccount" component={BankAccount} options={{ headerTitle : ''}}/>
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
  options={{ headerTitle: ''}}
/>
<Stack.Screen
  name="PaymentRefundIssue"
  component={PaymentRefundIssue}
  options={{ headerTitle: ''}}
/>
<Stack.Screen
  name="PaymentFailed"
  component={PaymentFailed}
  options={{ headerTitle: '' }}
/>     
<Stack.Screen
  name="ChargedButRideNotCompleted"
  component={ChargedButRideNotCompleted}
  options={{ headerTitle:'' }}
/>
<Stack.Screen
  name="RefundStatus"
  component={RefundStatus}
  options={{ headerTitle:'' }}
/>
<Stack.Screen
  name="RideCancellationIssue"
  component={RideCancellationIssue}
  options={{ headerTitle:'' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}