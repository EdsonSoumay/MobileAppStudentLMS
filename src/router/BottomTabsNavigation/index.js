import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {  NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigatorCustomize from './customize';

import { Home, Academic, News, Discussion } from '../../pages';
import {StackHome, StackAcademic} from '../StackNavigation';


// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
 


function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={ props => <BottomNavigatorCustomize {...props} />}>
      <Tab.Screen name="StackHome" component={StackHome} options={{headerShown: false, title: 'Home'}} />
      <Tab.Screen name="StackAcademic" component={StackAcademic} options={{headerShown: false, title: 'Academic'}} />
      <Tab.Screen name="News" component={News} options={{headerShown: false, title: 'News'}} />
      <Tab.Screen name="Discussion" component={Discussion} options={{headerShown: false, title: 'Discussion'}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default BottomTabNavigation



