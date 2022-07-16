import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap } from '../../components'

const DisplayQuiz = (props) => {
  let sum = [1,2,3,4]

  return (
    <>
      <View style={styles.title}>
        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 20, color:'#000000'}}>Organization Behaviour</Text>
      </View>
      <Gap height={38}/> 
      <View style={styles.body}>
        <View style={styles.numberOfQuiz}>
          <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#F2575D'}}>Question 15/15</Text>
        </View>
        <View style={styles.Question}>
          <Text style={{fontFamily:'Poppins-Medium', fontSize:17, color:'#000000'}}>Lorem Ipsum is simply dummy text of the industry ?</Text>
        </View>
        <Gap height={32}/>
        {
          sum.map((data, i)=>{
            return(
              <TouchableOpacity style={styles.option} key={i}> 
              <View style={{flexDirection:'row'}}>
                  <View style={styles.circle}/>
                  <Gap width={38}/>
                  <Text style={{fontFamily:'Poppins-Medium', fontSize: 14, color:"#000000"}}>Lorem Ipsum</Text>
               </View>
            </TouchableOpacity>
            )
          })
        } 
      </View>
      <Gap height={13}/>
      <TouchableOpacity onPress={()=>props.navigation.navigate('ScoreQuiz')} style={styles.buttonStart}>
                <Text style={{fontFamily:'OpenSans-Bold', fontSize:17, color:'#FFFFFF'}}>Finish</Text>
            </TouchableOpacity>
    </>
  )
}

export default DisplayQuiz

const styles = StyleSheet.create({
    title:{
        marginHorizontal:46,
        marginTop: 20,
        alignItems:'center',
    },
    option:{
      height: 58,
      backgroundColor:'#F1F3F2',
      justifyContent:'center',
      borderRadius: 14,
      paddingHorizontal: 14,
      paddingVertical: 20,
      marginBottom: 26
    },
    body:{
      marginHorizontal: 20,
    },
    circle:{ 
      width: 23, 
      height: 23, 
      borderRadius: 23/2, 
      borderWidth: 1,
      borderColor:"#000000"
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