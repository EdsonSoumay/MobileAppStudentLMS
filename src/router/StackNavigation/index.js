import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Home, Setting, ForumClass, Profile } from '../../pages';

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false, title: 'Home'}} />
      <Stack.Screen name="Setting" component={Setting} options={{headerShown: false, title: 'Setting'}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false, title: 'Profile'}} />
      <Stack.Screen name="ForumClass" component={ForumClass} options={{headerShown: false, title: 'ForumClass'}} />
    </Stack.Navigator>
  );
}

export default StackHome

