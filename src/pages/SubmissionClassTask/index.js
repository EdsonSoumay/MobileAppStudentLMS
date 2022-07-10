import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftBlack, AttachmentIcon, TimeBlackIcon, TimeIcon } from '../../assets';
import { Gap } from '../../components';

const SubmissionClassTask = () => {
  return (
    <>
      <View style={styles.header}>
        <ArrowLeftBlack/>
        <Gap width={'20%'}/>
        <Text style={{fontFamily:'OpenSans-Bold', fontSize: 20, color:'#000000'}}>Assigment Details</Text>
      </View>
      <View style={{alignItems:'center', marginHorizontal:31}}>
        <View style={styles.ruler}/>
      </View>
      <Gap height={15}/>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
            <View>
                <Text style={{fontFamily:'OpenSans-SemiBold', color:'#000000', fontSize: 17}}>Assigment 1</Text>
            </View>
            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 14, color:'#356CB1'}}>In progress</Text>
            </View>
        </View>
        <Gap height={15}/>
        <View style={styles.contentTime}>
                <View>
                    <Text style={{fontFamily:'OpenSans-Medium', fontSize: 14, color:'#929292'}}>Due Date</Text>
                </View>
                <Gap height={5}/>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                     <TimeBlackIcon />
                    </View>
                    <Gap width={6}/>
                    <View>
                            <Text style={{fontFamily:'Poppins-Medium', fontSize: 14, color:'#000000'}}>10.00 AM - 11.30 AM</Text>
                    </View>
                </View>
        </View>
        <Gap height={15}/>
        <View style={styles.contentCaption}>
                <View>
                    <Text style={{fontFamily:'OpenSans-Medium', fontSize: 14, color:'#929292'}}>Description</Text>
                </View>
                <Gap height={5}/>
                <View>
                    <Text style={{fontFamily:'Poppins-Regular', fontSize: 14, color:'#000000'}}>Lorem Ipsum is simply dummy text of the printing and typesetting is industry Lorem Ipsum is simply the  dummy text of the air printing magie</Text>
                </View>
        </View>
        <Gap height={26}/>
        <View style={styles.contentBody}>
                <TouchableOpacity style={styles.attachmentButton}>
                    <View>
                        <AttachmentIcon/>
                    </View>
                    <Gap width={2}/>
                    <View>
                       <Text style={{fontFamily:'Poppins-Medium', fontSize: 14, color:'#000000'}}> add Attachment</Text>                   
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 14, color:'#FFFFFF'}}> Submit</Text>                   
                </TouchableOpacity>
        </View>
      </View>
      <View style={styles.comment}>
        {/* <Text>comment</Text> */}
      </View>
    </>
  )
}

export default SubmissionClassTask;

const styles = StyleSheet.create({
    header:{
        height: 50,
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 14
    },
    ruler:{
        height:1.9,
        width:'100%',
        backgroundColor:'#C4C4C4'
    },
    content:{
        flexDirection:'column',
        marginHorizontal: 31,
        backgroundColor:'pink',
        height:'63%'
    },
    contentHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    contentTime:{
        flexDirection:'column'
    },
    contentCaption:{
        flexDirection:'column'
    },
    contentBody:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    attachmentButton:{
        flexDirection:'row',
        height:44,
        width:168,
        backgroundColor:'#EEF1F7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 14
    },
    submitButton:{
        height:44,
        width:98,
        backgroundColor:'#356CB1',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 14
    }

})