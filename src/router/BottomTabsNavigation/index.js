import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ClassBottomTabCustomize, MainBottomTabCustomize} from '../../components/';

import {StackHome, StackAcademic, StackNews, StackDiscussion, StackForumClass} from '../StackNavigation';
import {ForumClassPeople, ForumClassTask } from '../../pages';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
 
export function MainBottomTab() {
  return (
      <Tab.Navigator tabBar={ props => <MainBottomTabCustomize {...props} />}>
      <Tab.Screen name="StackHome" component={StackHome} options={{headerShown: false, title: 'Home'}} />
      <Tab.Screen name="StackAcademic" component={StackAcademic} options={{headerShown: false, title: 'Academic'}} />
      <Tab.Screen name="StackNews" component={StackNews} options={{headerShown: false, title: 'News'}} />
      <Tab.Screen name="StackDiscussion" component={StackDiscussion} options={{headerShown: false, title: 'Discussion'}} />
      </Tab.Navigator>
  );
}

export function ClassBottomTab() {
  return (
      <Tab.Navigator tabBar={ props => <ClassBottomTabCustomize {...props} />}>
      <Tab.Screen name="StackForumClass" component={StackForumClass} options={{headerShown: false, title: 'Forum'}} />
      <Tab.Screen name="ForumClassTask" component={ForumClassTask} options={{headerShown: false, title: 'Class Task'}} />
      <Tab.Screen name="ForumClassPeople" component={ForumClassPeople} options={{headerShown: false, title: 'People'}} />
    </Tab.Navigator>
  );
}







