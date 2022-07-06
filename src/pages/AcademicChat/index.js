import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeft, AttachmentIcon, Images2, SendMessageIcon } from '../../assets'
import { Gap } from '../../components'

const AcademicChat = () => {
  return (
  <>
    <View style={{backgroundColor:'#356CB1', flex:1}}>
        {/* <Text>header</Text> */}
        <View style={styles.header}>
            <View>
                <ArrowLeft />
            </View>
            <Gap width={23.5}/>
            <View>
                <Image
                style={styles.tinyLogo}
                source={Images2}
                />
            </View>
            <Gap width={15}/>
            <View>
                <Text style={{fontFamily:'OpenSans-Regular', fontSize:20, color:'#FFFFFF'}}>Jhon Doe</Text>
            </View>
        </View>
    <View style={styles.body}> 
        <View>
            {/* <Text>Messagge</Text> */}
        </View>
        <View style={styles.containerTextInputandSendMessage}>
            <View style={styles.containerTextInput}>
                <TextInput
                    placeholder='Type a message'
                />
                <AttachmentIcon/>
            </View>
            <TouchableOpacity style={styles.containerSendMessage}>
                {/* <Text>send</Text> */}
                <SendMessageIcon/>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  </>
  )
}

export default AcademicChat

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 19,
        height: 123,
    },
    tinyLogo: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2
      },
      body:{
        backgroundColor:'#FFFFFF',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        // justifyContent:'center',
        // alignItems:'center',
        borderTopRadius: 25
      },
      containerTextInputandSendMessage:{
            position:'absolute',
            top: '85%',
            paddingHorizontal:26.5,
            flexDirection:'row',
            height: 45,
            justifyContent:'space-between',
            width:'100%',
      },
      containerTextInput:{
        borderColor:'#E8E8E8',
        borderRadius: 24,
        borderWidth: 2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width: '80%',
      },
      containerSendMessage:{
        backgroundColor:'#356CB1',
        height: 45,
        borderRadius:45/2,
        width:45,
        alignItems:'center',
        justifyContent:'center'
      }
})