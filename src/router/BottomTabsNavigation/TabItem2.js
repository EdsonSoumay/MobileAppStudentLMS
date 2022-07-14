import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// import { colors } from '../../../utils/colors'

import {
   HomeIcon,
   HomeActiveIcon,
   AcademicIcon,
   AcademicActiveIcon,
   NewsIcon,
   NewsActiveIcon,
   DiscussionIcon,
   DiscussionActiveIcon
  
  } from '../../assets'

const TabItem2 = ({isFocused, onLongPress, onPress, label}) => {
    const Icon2 = () => {
        if(label === "Forum") {
            return isFocused ? <HomeActiveIcon/> : <HomeIcon/>
        }

        if(label === "Class Task") {
          return isFocused ? <AcademicActiveIcon/> : <AcademicIcon/>
      }

        if(label === "People") {
            return isFocused ? <NewsActiveIcon/> : <NewsIcon/>
        }


        return <HomeActiveIcon/>
    }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon2/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem2

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
    },
    text: (isFocused) => ({
        // // color: isFocused ? colors.kedua : colors.keenam,
        color: isFocused ? '#01469F' : '#000000',
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        marginTop: 6
    })
})