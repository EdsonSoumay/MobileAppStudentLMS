import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { QuizSuccesIlustration } from '../../assets'
import { Gap } from '../../components'

const ScoreQuiz = (props) => {
  return (
    <>
      <Gap height={20}/>
      <View style={styles.ilustrator}>
            <QuizSuccesIlustration/>
            <Text style={{fontFamily:'Poppins-Medium', fontSize: 14, color:'#FFFFFF'}}>You get +80 Quiz Points</Text>
      </View>
      <Gap height={50}/>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.correctAns}>
            <Text style={styles.textAnswer}>CORRECT ANSWER</Text>
            <Text style={styles.textAnswer2}>12 Question</Text>
        </View>
        <Gap height={45}/>
        <View style={styles.inCorrectAns}>
        <Text style={styles.textAnswer}>In Correct Answer</Text>
            <Text style={styles.textAnswer2}>5 Question</Text>
        </View>
      </View>
      <Gap height={50}/>
      <TouchableOpacity style={styles.buttonStart} onPress={()=>props.navigation.navigate('SubmissionClassQuiz')}>
                <Text style={{fontFamily:'OpenSans-Bold', fontSize:17, color:'#FFFFFF'}}>Done</Text>
            </TouchableOpacity>
    </>
  )
}

export default ScoreQuiz

const styles = StyleSheet.create({
    ilustrator:{
        backgroundColor:'#F9B0B0',
        height: 284,
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal: 20,
        borderRadius: 14
    },
    buttonStart:{
        backgroundColor:'#356CB1',
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal: 102,
        height: 54,
        alignItems:'center',
        borderRadius: 14  
    },
    correctAns:{
        alignItems:'center'
    },
    inCorrectAns:{
        alignItems:'center'
    },
    textAnswer:{fontFamily:'Poppins-Medium', fontSize: 15, opacity: 0.5, color:'#000000'},
    textAnswer2:{
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color:'#000000'
    }
})