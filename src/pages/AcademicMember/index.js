import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ArrowLeft, ChatIcon, Images1, Images2 } from '../../assets'
import { Gap } from '../../components'

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
    <View style={styles.content}>
        <View
            // style advisor
        >
            <View>
                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Advisor</Text>
            </View>
            <Gap height={10}/>
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
                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Jhon Doe</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily:'Poppins-Medium', fontSize:13, color:'#787878'}}>JhonDoe@student.unklab.ac.id</Text>
                    </View>
                </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <ChatIcon/>
                </View>
            </View>
        </View>
        <Gap height={23}/>
        <View
            // style student
        >
            <View>
                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Student</Text>
            </View>
            <Gap height={10}/>
            <View style={styles.CardAdvisor}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image
                        source={Images2}
                        style={styles.tinyLogo}
                        />
                </View>
                <Gap width={13}/>
                <View style={{flexDirection:"column"}}>
                    <View>
                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#3A3A3A'}}>Josh</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily:'Poppins-Medium', fontSize:13, color:'#787878'}}>josh@student.unklab.ac.id</Text>
                    </View>
                </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <ChatIcon/>
                </View>
            </View>
        </View>
    </View>
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