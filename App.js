import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from './src/assets'
const App = () => {
  return (
    <View style={{backgroundColor:'#356CB1', flex:1}}>
      {/* <Text>App</Text> */}
      <View style={{marginHorizontal:28}}>
            <Logo 
                width="100%"
                height="100%"
                />
      </View>
    </View>
  )
}

export default App;