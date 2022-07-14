import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { Home, Setting, ForumClass, Profile, Academic, AcademicMember, AcademicChat, News, EachNews, Discussion, SplashScreen, Login } from '../../pages';
import {MainBottomTab, MainBottomTab2} from '../BottomTabsNavigation';

const Stack = createStackNavigator();

export const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      <Stack.Screen name="MainBottomTab2" component={MainBottomTab2} options={{headerShown: false, title: 'MainBottomTab2'}} />
    </Stack.Navigator>
  );
}

export const StackAcademic = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Academic" component={Academic} options={{headerShown: false, title: 'Academic'}} />
      <Stack.Screen name="AcademicMember" component={AcademicMember} options={{headerShown: false, title: 'AcademicMember'}} />
      <Stack.Screen name="AcademicChat" component={AcademicChat} options={{headerShown: false, title: 'AcademicChat'}} />
    </Stack.Navigator>
  );
}

export const StackNews = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={News} options={{headerShown: false, title: 'News'}} />
      <Stack.Screen name="EachNews" component={EachNews} options={{headerShown: false, title: 'EachNews'}} />
    </Stack.Navigator>
  );
}

export const StackDiscussion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discussion" component={Discussion} options={{headerShown: false, title: 'News'}} />
    </Stack.Navigator>
  );
}


export const OpeningStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, title: 'SplashScreen'}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false, title: 'Login'}} />
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} options={{headerShown: false, title: 'MainBottomTab'}} />
      </Stack.Navigator>
    );
  }


