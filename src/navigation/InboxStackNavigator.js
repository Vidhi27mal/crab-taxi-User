import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../Inbox/Inbox';
import Notifications from '../Inbox/Notifications';
import MessagesScreen from '../Inbox/MessagesScreen';
import ChatScreen from '../Inbox/ChatScreen';
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