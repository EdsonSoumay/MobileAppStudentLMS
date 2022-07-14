import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

const Button = ({name,size,weight,color,fam, textAlign, onPress, ...rest})=>{
  const style = StyleSheet.create({
    text:{
      color,
      fontSize:size,
      fontFamily:fam,
      textAlign:textAlign
    }
  })

  return(
    <TouchableOpacity onPress={onPress} {...rest}>
      <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  )
}



export default Button
