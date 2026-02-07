import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../screens/Inbox';
import Notifications from '../screens/Notifications';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import { StyleSheet } from 'react-native/types_generated/index';

const InboxStack = createStackNavigator();

const InboxStackNavigator = () => {
  return (
    <InboxStack.Navigator screenOptions={{headerShown: false}}>
        <InboxStack.Screen name="Inbox" component={Inbox} />
        <InboxStack.Screen name="Notifications" component={Notifications} />
        <InboxStack.Screen name="MessagesScreen" component={MessagesScreen} />
        <InboxStack.Screen name="ChatScreen" component={ChatScreen} />

    </InboxStack.Navigator>
  )
}

export default InboxStackNavigator