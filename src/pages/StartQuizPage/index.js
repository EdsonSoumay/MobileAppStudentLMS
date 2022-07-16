import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftBlack, QuizStartIlustration } from '../../assets'
import { Gap } from '../../components'

const StartQuizPage = (props) => {
  return (
    <>
        <Gap height={20}/>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <ArrowLeftBlack/>
            </TouchableOpacity>
            <Gap width={'20%'}/>
            <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#000000'}}>Organization Behavior</Text>
        </View>
        <Gap height={53}/>
        <View style={styles.body}>
            <View style={{alignItems:'center'}}>
                <QuizStartIlustration/>
            </View>
            <Gap height={49}/>
            <View style={{paddingHorizontal:'10%'}}>
                <View>
                    <Text style={{fontFamily:'Poppins-Medium', fontSize: 20, color:'#000000'}}>Quiz</Text>
                </View>
                <Gap height={24}/>
                <View>
                    <Text style={{fontFamily:'Poppins-Regular', fontSize: 14, color:'#000000'}}>Question: 20 </Text>
                </View>
                <Gap height={5}/>
                <View>
                    <Text style={{fontFamily:'Poppins-Regular', fontSize: 14, color:'#000000'}}>Time: 20 Menit </Text>
                </View>
            </View>
            <Gap height={30}/>
            <TouchableOpacity style={styles.buttonStart} onPress={()=>props.navigation.navigate('DisplayQuiz')}>
                <Text style={{fontFamily:'OpenSans-Bold', fontSize:17, color:'#FFFFFF'}}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default StartQuizPage

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        marginHorizontal: 14,
        alignItems:'center',
    },
    body:{
        marginHorizontal: 35,
    },
    buttonStart:{
        backgroundColor:'#356CB1',
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal: 37,
        height: 54,
        alignItems:'center',
        borderRadius: 14  
    }
})