import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LogoFIK, SendMessageIcon } from '../../assets'
import { Gap } from '../../components'
import DiscussionData from '../../assets/json/Discussion.json'


const Discussion = () => {

  return (
    <>
      <View style={styles.header}>
            <View>
                <LogoFIK/>
            </View>
            <Gap width={5}/>
            <View>
                <View>
                    <Text style={{fontFamily:'OpenSans-Bold', fontSize: 20, color:'#FFFFFF'}}>UK Computer Science</Text>    
                </View>    
                <View>
                    <Text style={{fontFamily:'OpenSans-Regular', fontSize: 14, color:'#FFFFFF'}}>794 members, 20 online</Text>    
                </View>    
            </View>        
      </View>
      < ScrollView  style={styles.body}> 
     <Gap height={30}/>
     {/* <View style={styles(StyleOnBodyChat).body}>  */}
     {
        DiscussionData.DiscussionData.map((data, i)=>{
            const userSebelumnya = DiscussionData.DiscussionData[i - 1]?.user;
            const userSekarang = data.user;
            const userSelanjutnya = DiscussionData.DiscussionData[i + 1]?.user;

            // console.log("user selanjutnya:",data.id , userSelanjutnya)
            return(   
             data.user === data.user ?
                data.user !== 'Josh' ?
                <View style={userSelanjutnya == undefined? [ styles.friendChat,{marginBottom: 70}]: [styles.friendChat]} key={i}>                        
                        {
                            userSekarang === userSebelumnya ?
                            null
                            : 
                        <Text style={{fontFamily:'OpenSans-SemiBold', color:'#000000',fontSize: 16}}>         
                            {data.user}  
                        </Text>
                        }
                            <Gap height={8}/>
                        <Text style={{fontSize:13, fontFamily:'Poppins-Regular', color:'#111111'}}>   
                            {`${data.content} `}   
                        </Text>
                    </View>
                    :
                    <View style={userSelanjutnya == undefined? [ styles.myChat,{marginBottom: 70}]: [styles.myChat]} key={i}>                        
                            {
                                userSekarang === userSebelumnya ?
                                null
                                : 
                                <Text style={{fontFamily:'OpenSans-SemiBold', color:'#FFFFFF',fontSize: 16}}>         
                                {data.user}  
                                </Text>
                            }
                        <Gap height={8}/>
                        <Text style={{fontSize:13, fontFamily:'Poppins-Regular', color:'#FFFFFF'}}>   
                            {`${data.content} `}   
                        </Text>
                    </View>
                    :null
             )     
            })
           }
    </ScrollView>
    <View style={styles.containerTextInputandSendMessage}>
              <View style={styles.containerTextInput}>
                  <TextInput
                    placeholder='Type a message'
                />
            </View>
            <TouchableOpacity style={styles.containerSendMessage}>
                <SendMessageIcon/>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default Discussion

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        height: 73,
        backgroundColor:'#356CB1',
        paddingHorizontal: 17
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
    friendChat:{
        paddingVertical: 14,
        // paddingTop: 14,
        // paddingBottom:20,
        paddingHorizontal:27,
        maxWidth:'70%',
        maxHeight:200,
        flexDirection:'column',
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
        maxHeight:200,
        flexDirection:'column',
        backgroundColor:'#356CB1',
        opacity: 0.7,
        marginBottom: 11,
        left: '28%',
        borderColor:'#E8E8E8',
        borderWidth: 1,
        borderRadius: 14
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
        // backgroundColor:'#FFFFFF'
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
})

