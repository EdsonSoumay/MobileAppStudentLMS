import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { BellIcon, Class1Ilustration, Class2Ilustration,Class3Ilustration , Images1, SearchIcon, SettingIcon } from '../../assets'
import { Gap } from '../../components'
import ListClass from '../../assets/json/ListClass.json';
import {Button} from '../../components';


const HomePage = () => {
    const path = '../../assets/ilustrations/class2-ilustration.png'

  return (
    <>
        <View style={styles.header}>
            <Gap height={60}/>
            <View style={styles.headerContent}>
                    {/* <Gap width="2%"/> */}
                    <TouchableOpacity>
                        <Image
                            source={Images1}
                            style={styles.tinyLogo}
                            />
                    </TouchableOpacity>
                    <Gap width={15}/>
                    <TouchableOpacity>
                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:22, color:'#FFFFFF'}}>Halo,  Josh</Text>
                    </TouchableOpacity>
                <Gap width="40%"/>
                <View style={{flexDirection:'row', maxWidth:100, alignItems:'flex-end', justifyContent:'space-between'}}>
                    <TouchableOpacity style={styles.notificationAndSettingIcon}>
                        <BellIcon
                            height= "80%"
                            width= "80%"
                        />
                        <View
                            style={{width:10, height:10, backgroundColor:'#F76E11', borderRadius:10, borderWidth:0, position:'absolute', top:-3, right:-3, justifyContent:'center', alignItems:'center'}}>
                        </View>
                    </TouchableOpacity>
                   <Gap width={25}/>
                    <TouchableOpacity style={styles.notificationAndSettingIcon}>
                        <SettingIcon
                            height= "80%"
                            width= "80%"
                        />
                    </TouchableOpacity>
                <Gap width='2%'/>
                </View>
            </View>
       </View>

        <View style={{flex: 1, backgroundColor:'#F6F6F6'}}>
        {/* <Gap height={47}/> */}
       <View style={styles.searchSection}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                // onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
            <SearchIcon style={styles.searchIcon} />
        </View>

      {/* <Gap height={50}/> */}

      
        <ScrollView style={styles.bodyContent}>
            {
                ListClass.ListClass.map((data, i)=>{    
                    return(
                    <TouchableOpacity style={[styles.classCard, {backgroundColor:data.color}]} 
                        key={`index:${i}`}
                        // onPress={()=>alert()}
                        >
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Class1Ilustration style={{ marginleft:13, marginVertical:22,}}  />
                            </View>

                            <View style={{ flexDirection:'column', marginVertical:22, marginleft:13,}}>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Bold', fontSize:15, color:'#FFFF'}}>{data.MK}</Text>
                                    </View>
                                    <Gap height={30}/>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'#FFFF'}}>Paralel: {data.paralel} </Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'#FFFF'}}>({data.Schedule})</Text>
                                    </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
                })
            }
            </ScrollView>

            <TouchableOpacity style={styles.addClassContainer}>
                <View style={styles.addClassSubContainer}>
                    <Text style={{color:'#FFFFFF', fontSize:35}}>+</Text>
                </View>
            </TouchableOpacity>
            </View>
        
     </>
  )
}

export default HomePage

const styles = StyleSheet.create({
    addClassContainer:{
        height: 67, 
        width: 67, 
        borderRadius: 67/2, 
        backgroundColor:'#FFFF',
        position:'absolute', 
        top: '75%', 
        right: 29,
        justifyContent:'center',
        alignItems:'center'
    },
    addClassSubContainer:{
        height: 60, 
        width: 60, 
        borderRadius: 60/2, 
        backgroundColor:'#356CB1',
        justifyContent:'center',
        alignItems:'center'
    },
    bodyContent:{
        marginHorizontal:15,
        // flex: 1
        marginTop: 0,
        backgroundColor:'#fffff'
    },

    classCard:{
        height:138,
        width:'100%',
        borderRadius:14,
        marginBottom:15
    },
    header:{
        backgroundColor: '#356CB1',
        width:'100%',
        height:125,
    },
    headerContent:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        // backgroundColor:'lightgreen',
        marginHorizontal:15        
    },
    tinyLogo: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2
      },
      profile:{
            flexDirection:'row',
            alignItems:'center'
      },
      notificationAndSettingIcon:{
        height:24.63,
        width:24.63,
        backgroundColor:'#FFFFFF',
        borderRadius:24.63/2,
        alignItems:'center',
        justifyContent:'center'
      
      },
      searchSection: {
        marginHorizontal:15,
        marginTop: 47,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    searchIcon: {
        padding: 10,
        position:'absolute', top:13, right:15
        
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: '#424242',
        borderColor:'#969696',
        borderWidth:1,
        borderRadius: 14,
        height:46,
        width:'90%'

    },
})

