import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput  } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {  NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigatorCustomize from './customize';

import { Home, Academic, News, Discussion } from '../../pages';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();


function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      //  screenOptions={{
      //   tabBarHideOnKeyboard: true,
      //   tabBarStyle: { backgroundColor:'lightblue', height: 58, borderTopLeftRadius: 14, borderTopRightRadius: 14 }
      // }}
        tabBar={ props => <BottomNavigatorCustomize {...props} />}
        
      >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, title: 'Home'}} />
      <Tab.Screen name="Academic" component={Academic} options={{headerShown: false, title: 'Academic'}} />
      <Tab.Screen name="News" component={News} options={{headerShown: false, title: 'News'}} />
      <Tab.Screen name="Discussion" component={Discussion} options={{headerShown: false, title: 'Discussion'}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default BottomTabNavigation

const styles = StyleSheet.create({
  containerTextInput:{
      marginTop:'80%',
      borderColor:'#E8E8E8',
      borderRadius: 24,
      borderWidth: 2,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      width: '80%',
      backgroundColor:'#FFFFFF'
    },
})


const ObrolanCS = () =>{
    return(
        <View style={styles.containerTextInput}>
        <TextInput
          placeholder='Type a message'
      />
      </View>
    )
}


const BerandaCS = () =>{
    return(
        <View>
            <Text>BerandaCS</Text>
        </View>
    )
}


