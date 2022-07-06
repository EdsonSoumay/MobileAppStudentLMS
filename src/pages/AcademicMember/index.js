import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeft, ChatIcon, Images1, Images2 } from '../../assets'
import { Gap } from '../../components'
import AcademicMemberList from '../../assets/json/AcademicMember.json'

const AcademicMember = () => {
  return (
   <>
    <View style={styles.header}>
       <View>
         <ArrowLeft/>
       </View>
       <Gap width={24.5}/>
       <View>
       <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#FFFFFF'}}>People</Text>
       </View>
    </View>
    <Gap height={23}/>
    <ScrollView style={styles.content}>
        <View>
            <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Advisor</Text>
        </View>
        <Gap height={10}/>
        {/* Advisor */}
        {
            AcademicMemberList.Advisor.map((data, i)=>{
                return(
                <View key={i} style={{marginBottom:10}}>
                    <View style={styles.CardAdvisor}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image
                                source={Images1}
                                style={styles.tinyLogo}
                                />
                        </View>
                        <Gap width={13}/>
                        <View style={{flexDirection:"column"}}>
                            <View>
                                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>{data.Name}</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:'Poppins-Medium', fontSize:13, color:'#787878'}}>{data.Email}</Text>
                            </View>
                        </View>
                        </View>
                        <TouchableOpacity style={{justifyContent:'center'}}>
                            <ChatIcon/>
                        </TouchableOpacity>
                    </View>
                </View>
                
                )
            })
            
        }
        <Gap height={23}/>

        {/* Student */}
        <View>
            <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Student</Text>
        </View>
        <Gap height={10}/>
        {
            AcademicMemberList.Student.map((data, i)=>{
                return(
                <View key={i} style={{marginBottom:10}}>
                    <View style={styles.CardAdvisor}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Image
                                source={Images1}
                                style={styles.tinyLogo}
                                />
                        </View>
                        <Gap width={13}/>
                        <View style={{flexDirection:"column"}}>
                            <View>
                                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>{data.Name}</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:'Poppins-Medium', fontSize:13, color:'#787878'}}>{data.Email}</Text>
                            </View>
                        </View>
                        </View>
                        <TouchableOpacity style={{justifyContent:'center'}}>
                            <ChatIcon/>
                        </TouchableOpacity>
                    </View>
                </View>
                
                )
            })
            
        }
    </ScrollView>
   </>
  )
}

export default AcademicMember

const styles = StyleSheet.create({
    header:{
        height: 92,
        backgroundColor:'#356CB1',
        paddingHorizontal:19,
        flexDirection:'row',
        alignItems:'center'
    },
    tinyLogo: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2
      },
      content:{
        marginHorizontal:16.5
      },
      CardAdvisor:{
        borderColor:'#949494',
        borderWidth: 1,
        borderRadius: 14,
        flexDirection:'row',
        padding:15,
        height:67,
        justifyContent:'space-between'
      }
})