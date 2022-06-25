import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Logo} from '../../assets'

const SplashScreen = () => {
  return (
    <View style={{backgroundColor:'#356CB1', flex:1}}>
    {/* <Text>Apps</Text> */}
    <View style={{marginHorizontal:28}}>
          <Logo 
              width="100%"
              height="100%"
              />
    </View>
  </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})