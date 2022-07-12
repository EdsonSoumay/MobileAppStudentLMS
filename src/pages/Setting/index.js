import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import {AboutBlackIcon, AboutIcon, ArchiveIcon, ArrowLeftBlack, BellIcon, DarkModeIcon, HelpIcon, LogOutIcon, RightIcon, WorldIcon} from '../../assets'
import {Gap} from '../../components'

const Setting = () => {
  return (
    <>
      <View style={styles.header}>
        <ArrowLeftBlack/>
        <Gap width={32.5}/>
        <Text style={{fontFamily:'OpenSans-Bold', color:'#000000', fontSize:17}}>Settings</Text>
      </View>
      <Gap height={72}/>
      <View style={styles.body}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
              <WorldIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Language</Text>
            </View>
          </View>
          <View style={styles.other}>
            <Text>English</Text>
            <Gap width={12}/>
            <View style={styles.containerRightIcon}>
              <RightIcon/>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={27}/>
        <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
              <BellIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Notification</Text>
            </View>
          </View>
          <View style={styles.other}>
            <View style={styles.containerRightIcon}>
              <RightIcon/>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={27}/>
        <View style={styles.card}>
          <View style={styles.other}>
            <View>
             <DarkModeIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Dark Mode</Text>
            </View>
          </View>
          <View style={styles.other}>
            <Text>Off</Text>
            <Gap width={12}/>
            <View style={{ width: 34, height: 34, borderRadius:14, justifyContent:'center', alignItems:'center'}}>
              <Switch/>
            </View>
          </View>
        </View>
        <Gap height={27}/>
        <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
             <HelpIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Help</Text>
            </View>
          </View>
          <View style={styles.other}>
            <View style={styles.containerRightIcon}>
              <RightIcon/>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={27}/>
        <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
              <ArchiveIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Archive Class</Text>
            </View>
          </View>
          <View style={styles.other}>
            <View style={styles.containerRightIcon}>
              <RightIcon/>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={27}/>
        <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
            <AboutBlackIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>About App</Text>
            </View>
          </View>
          <View style={styles.other}>
            <View style={styles.containerRightIcon}>
              <RightIcon/>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={'30%'}/>
      <TouchableOpacity style={styles.card}>
          <View style={styles.other}>
            <View>
              <LogOutIcon/>
            </View>
            <Gap width={35}/>
            <View>
              <Text style={styles.titleSetting}>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Setting

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    paddingTop: 27,
    paddingLeft:50,
    alignItems:'center'
  },
  body:{
    marginHorizontal: 50
  },
  card:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  containerRightIcon:{
    width: 34,
    height: 34,
    borderRadius:14,
    backgroundColor:'#EEF1F7',
    justifyContent:'center',
    alignItems:'center',
  },
  other:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  titleSetting:{fontFamily:'OpenSans-SemiBold', fontSize: 14, color:'#0D0D0D'}
})