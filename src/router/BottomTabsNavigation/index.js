import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {  NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigatorCustomize from './customize';

import {StackHome, StackAcademic, StackNews, StackDiscussion} from '../StackNavigation';


// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
 


function MainBottomTab() {
  return (
    // <NavigationContainer>
      <Tab.Navigator tabBar={ props => <BottomNavigatorCustomize {...props} />}>
      <Tab.Screen name="StackHome" component={StackHome} options={{headerShown: false, title: 'Home'}} />
      <Tab.Screen name="StackAcademic" component={StackAcademic} options={{headerShown: false, title: 'Academic'}} />
      <Tab.Screen name="StackNews" component={StackNews} options={{headerShown: false, title: 'News'}} />
      <Tab.Screen name="StackDiscussion" component={StackDiscussion} options={{headerShown: false, title: 'Discussion'}} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}


export default MainBottomTab



