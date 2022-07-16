import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Setting, ForumClass, Profile, Academic, AcademicMember, AcademicChat, News, EachNews, Discussion, SplashScreen, Login, SubmissionClassQuiz, SubmissionClassTask, StartQuizPage, DisplayQuiz, ScoreQuiz } from '../../pages';
import {MainBottomTab, BottomClass} from '../BottomTabsNavigation';

const Stack = createStackNavigator();

export const StackSingle = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, title: 'SplashScreen'}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false, title: 'Login'}} />
      <Stack.Screen name="MainBottomTab" component={MainBottomTab} options={{headerShown: false, title: 'MainBottomTab'}} />
      <Stack.Screen name="BottomClass" component={BottomClass} options={{headerShown: false, title: 'BottomClass'}} />

      {/* StackNews yang tidak pake bottom tab*/}
      <Stack.Screen name="EachNews" component={EachNews} options={{headerShown: false, title: 'EachNews'}} />

      {/* StackForumClass yang tidak pake bottom tab*/}
      <Stack.Screen name="SubmissionClassTask" component={SubmissionClassTask} options={{headerShown: false, title: 'SubmissionClassTask'}} />  
      <Stack.Screen name="SubmissionClassQuiz" component={SubmissionClassQuiz} options={{headerShown: false, title: 'SubmissionClassQuiz'}} />
      <Stack.Screen name="StartQuizPage" component={StartQuizPage} options={{headerShown: false, title: 'StartQuizPage'}} />
      <Stack.Screen name="DisplayQuiz" component={DisplayQuiz} options={{headerShown: false, title: 'DisplayQuiz'}} />
      <Stack.Screen name="ScoreQuiz" component={ScoreQuiz} options={{headerShown: false, title: 'ScoreQuiz'}} />
     
      {/* StackAcademic yang tidak pake bottom tab*/}
      <Stack.Screen name="AcademicMember" component={AcademicMember} options={{headerShown: false, title: 'AcademicMember'}} />
      <Stack.Screen name="AcademicChat" component={AcademicChat} options={{headerShown: false, title: 'AcademicChat'}} />
    </Stack.Navigator>
  );
}

export const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export const StackAcademic = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Academic" component={Academic} options={{headerShown: false, title: 'Academic'}} />
    </Stack.Navigator>
  );
}

export const StackNews = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={News} options={{headerShown: false, title: 'News'}} />
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

export const StackForumClass = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForumClass" component={ForumClass} options={{headerShown: false, title: 'ForumClass'}} />
    </Stack.Navigator>
  );
}
