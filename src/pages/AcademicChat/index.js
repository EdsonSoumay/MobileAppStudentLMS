import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { ArrowLeft, AttachmentIcon, Images2, SendMessageIcon } from '../../assets'
import { Gap } from '../../components'
import AcademicChatdata from '../../assets/json/AcademicChat.json'

const AcademicChat = () => {

  // const [StyleOnBodyChat, setStyleOnBodyChat] = useState('flex-end')

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
    

    < ScrollView  style={styles.body}> 
    <Gap height={30}/>
    {/* <View style={styles(StyleOnBodyChat).body}>  */}
    {
        AcademicChatdata.AcademicChat.map((data, i)=>{
            const userSebelumnya = AcademicChatdata.AcademicChat[i - 1]?.user;
            const userSekarang = data.user;
            const userSelanjutnya = AcademicChatdata.AcademicChat[i + 1]?.user;

            console.log("user selanjutnya:",data.id , userSelanjutnya)
            return(   
              
             data.user === 'Jhon Doe' ?
              <View style={userSelanjutnya == undefined? [ styles.friendChat,{marginBottom: 70}]: [styles.friendChat]} key={i}>                        
                    {/*
                    // jangan hapus code ini dalam kondisi apapun, ini code chat yg berharga 
                      <Text style={{color:'blue', fontWeight:'bold', fontSize:20}}>         
                      {
                        userSekarang === userSebelumnya
                        ? `` 
                        : `${data.user}: `   
                      }
                    </Text> */}

                    <Text style={{color:'blue', fontWeight:'bold', fontSize:13, fontFamily:'Poppins-Regular', color:'#000000'}}>   
                        {`${data.content} `}   
                    </Text>
                </View>
              :
               data.user === 'Josh' ?
               <View style={userSelanjutnya == undefined? [ styles.myChat,{marginBottom: 70}]: [styles.myChat]} key={i}>                        

                  {/* 
                    // jangan hapus code ini dalam kondisi apapun, ini code chat yg berharga 
                  <Text style={{color:'red', fontWeight:'bold', fontSize:20}}>
                    {
                       userSekarang === userSebelumnya
                       ? `` 
                       : `${data.user}: `   
                    }
                  </Text> */}
                  
                  <Text style={{color:'red', fontSize:20, }}>{data.content}</Text>
                  </View>
                  :null
               )
        })
    }
    </ScrollView>
    {/* <Gap height={100}/> */}

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
  </>
  )
}

export default AcademicChat

//  const styles = (props) => StyleSheet.create({
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
        // flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        // justifyContent:'center',
        // alignItems:'flex-end',
        // alignItems:'flex-start',
        borderTopRadius: 25,
      },
      containerTextInputandSendMessage:{
            position:'absolute',
            // top: '85%',
            bottom:'2%',
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
        backgroundColor:'#FFFFFF'
      },
      containerSendMessage:{
        backgroundColor:'#356CB1',
        height: 45,
        borderRadius:45/2,
        width:45,
        alignItems:'center',
        justifyContent:'center'
      },
      friendChat:{
        padding: 13,
        maxWidth:'70%',
        maxHeight:66,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        marginBottom: 11,
        left: '2%',
        borderColor:'#E8E8E8',
        borderWidth: 1,
        borderRadius: 14
        
      },
      myChat:{
        padding: 13,
        maxWidth:'70%',
        maxHeight:66,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        marginBottom: 11,
        left: '12%',
        borderColor:'#E8E8E8',
        borderWidth: 1,
        borderRadius: 14
      },
})