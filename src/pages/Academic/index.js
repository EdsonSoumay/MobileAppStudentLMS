import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Gap } from '../../components'
import { AboutIcon, ChatIcon, DiscussionIcon, Images1, Images2, SendMessageIcon } from '../../assets'
import AcademicContent from '../../assets/json/AcademicContent.json'


const Academic = () => {
  return (
    <>
        <View style={styles.header}>
            <View style={{alignItems:'flex-end'}}>
                <AboutIcon />
            </View>
            <Gap height={16}/>
                <View style={{}}>
                    <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#FFFFFF'}}>Academic Guidance</Text>
                </View>
                <Gap height={3}/>
                <View>
                    <Text style={[ styles.text, {fontFamily:'Poppins-SemiBold', color:'#FFFFFF'}]}>Jhon Doe</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <View style={{justifyContent:"space-between",width:200, flexDirection:'row'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{zIndex:1,height: 46, width:46, borderRadius: 46, backgroundColor:'#356CB1', justifyContent:'center',alignItems:'center', top:-3}}>
                            <Image
                            source={Images2}
                                style={[styles.tinyLogo]}
                            />
                        </View>
                        <Image
                        source={Images1}
                            style={[styles.tinyLogo, {right:25}]}
                        />
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <View>
                                <Text style={[styles.text, {fontFamily:'Poppins-Regular', color:'#FFFFFF'}]}> +55 Classmates</Text>
                            </View>
                            <Gap height={1}/>
                            <View>
                                <Text style={[styles.text, {fontFamily:'Poppins-SemiBold', color:'#FFFFFF'}]}>{`See more >>`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
        <Gap height={15}/>
        <View style={styles.textInput}>
                <View>
                    <Image
                    source={Images1}
                    style={[styles.tinyLogo]}
                    />
                </View>
                <Gap width={20}/>
                <View>
                    <TextInput placeholder='type a message'/>
                </View>
        </View>
        <Gap height={15}/>
        <ScrollView style={{marginHorizontal:16}}>
        {
            AcademicContent.AcademicContent.map((data, i)=>{
                        console.log("data:",data)
                return(
                    <View 
                        style={styles.content}
                        key={`index:${i}`}
                    >
                        <View style={styles.headerContent}>
                            <View>
                                <Image
                                    source={Images1}
                                    style={[styles.tinyLogo]}
                                    />
                            </View>
                            <Gap width={25}/>
                            <View style={{flexDirection:'column'}}>
                                    <View>
                                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:17, color:'#1E1E1E'}}>{data.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:13, color:"#3E3E3E"}}>{data.time}</Text>
                                    </View>
                            </View>
                            </View>
                            <Gap height={15}/>
                            <View style={styles.bodyContent}>
                                <Text style={{color:'#303030', fontFamily:'Poppins-Regular', fontSize:14}}>
                                    {data.content}
                                </Text>
                            </View>
                            <Gap height={30}/>
                            <View style={styles.comentContent}>
                                <View>
                                    <DiscussionIcon />
                                </View>
                                <Gap width={15}/>
                                <View>
                                    <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#676767'}}>{data.comment} Comment</Text>
                                </View>
                            </View>
                        </View>
                        )
                    })
                }
            </ScrollView>
    </>
  )
}

export default Academic

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#356CB1',
        height: 176,
        marginTop: 14,
        borderRadius: 15,
        flexDirection:'column',
        padding:18,
        marginHorizontal: 16,
    },
    container:{
        alignItems:'center',
        paddingHorizontal: 16
    },
    tinyLogo: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2
      },
      textInput:{
        paddingHorizontal: 15,
        flexDirection:'row',
        borderWidth: 1,
        alignItems:'center',
        borderRadius: 14,
        borderColor:'#A7A7A7',
        marginHorizontal: 16,
      },
      content:{
        borderWidth:1,
        borderColor:'#949494',
        width:'100%',
        borderRadius: 14,
        marginBottom:15,
        },
      headerContent:{
        flexDirection:'row',
        marginTop: 23,
        marginHorizontal: 16,
      },
      bodyContent:{
        marginHorizontal: 16,
      },
      comentContent:{
        height:39,
        backgroundColor:'#EFEFEF',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 16,
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14
    },
      text:{
        fontSize: 14
      }
})