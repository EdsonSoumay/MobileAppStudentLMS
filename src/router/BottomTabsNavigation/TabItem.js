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

const TabItemCS = ({isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if(label === "Home") {
            return isFocused ? <HomeActiveIcon/> : <HomeIcon/>
        }

        if(label === "Academic") {
          return isFocused ? <AcademicActiveIcon/> : <AcademicIcon/>
      }

        if(label === "News") {
            return isFocused ? <NewsActiveIcon/> : <NewsIcon/>
        }

        if(label === "Discussion") {
            return isFocused ? <DiscussionActiveIcon/> : <DiscussionIcon/>
        }

        return <HomeActiveIcon/>
    }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon/>
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItemCS

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