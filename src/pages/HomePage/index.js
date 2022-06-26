import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { BellIcon, Class1Ilustration, Class2Ilustration,Class3Ilustration , Images1, SearchIcon, SettingIcon } from '../../assets'
import { Gap } from '../../components'
import ListClass from '../../assets/json/ListClass.json';



const HomePage = () => {
    const path = '../../assets/ilustrations/class2-ilustration.png'

  return (
    <View style={{backgroundColor:"#FFFF"}}>
        <View style={styles.header}>
        <Gap height={60}/>
        <View style={styles.headerContent}>
        <Gap width="2%"/>
                {/* profile */}
                <View>
                    <Image
                        source={Images1}
                        style={styles.tinyLogo}
                     />
                </View>
                <Gap width={15}/>
                <View>
                    <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:22, color:'#FFFFFF'}}>Halo,  Josh</Text>
                </View>
                {/* profile */}
            <Gap width="40%"/>
            <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around', width:80}}>
                <View style={styles.notificationAndSettingIcon}>
                    <BellIcon
                        height= "80%"
                        width= "80%"
                    />
                     <View
                        style={{width:10, height:10, backgroundColor:'#F76E11', borderRadius:10, borderWidth:0, position:'absolute', top:-3, right:-3, justifyContent:'center', alignItems:'center'}}>
                    </View>
                </View>
              <Gap width={10}/>
                <View style={styles.notificationAndSettingIcon}>
                    <SettingIcon
                        height= "80%"
                        width= "80%"
                    />
                </View>
              <Gap width='2%'/>
            </View>
         </View>
       </View>
       <View style={styles.bodyContent}>

       <View style={styles.texInput}>
            <TextInput/>
       </View>
       <View style={styles.searchSection}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                // onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
            <SearchIcon style={styles.searchIcon} />
        </View>
      <Gap height={50}/>
            {
                ListClass.ListClass.map((data, i)=>{
                    
                        console.log("data image:",data.image)
                        
                    return(
                        <View style={[styles.classCard, {backgroundColor:data.color}]} 
                        key={`index:${i}`}
                        >
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Class1Ilustration style={{ marginleft:13, marginVertical:22,}}  />
                                {/* <Image
                                source={require(`${data.image}`)}
                                style={styles.tinyLogo}
                            /> */}
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
                    </View>
                    )
                })
            }
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    bodyContent:{
        marginHorizontal:15
    },

    classCard:{
        height:138,
        // backgroundColor:'#FC9393',
        // alignItems:'center',
        // justifyContent:'center',
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
        justifyContent:'space-between',
        // justifyContent:,
        alignItems:'center',
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 15
    },
    searchIcon: {
        padding: 10,
        position:'absolute', top:-10, right:15
        
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