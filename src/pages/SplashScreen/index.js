import React, {useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {Logo} from '../../assets'

const SplashScreen = (props) => {

  useEffect(() => {
    setTimeout(nextPage, 2000);
  }, [])
  
  const nextPage = () =>{
    return props.navigation.navigate('Login')
  }

  return (
    <TouchableOpacity style={{backgroundColor:'#356CB1', flex:1}}>
    {/* <Text>Apps</Text> */}
    <View style={{marginHorizontal:28}}>
          <Logo 
              width="100%"
              height="100%"
              />
    </View>
  </TouchableOpacity>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})