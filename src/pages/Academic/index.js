import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Gap } from '../../components'
import { Images1, Images2 } from '../../assets'

const Academic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Gap height={25}/>
            <View style={{}}>
                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#FFFFFF'}}>Academic Guidance</Text>
            </View>
            <Gap height={3}/>
            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, color:'#FFFFFF'}}>Jhon Doe</Text>
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
                            <Text style={{fontFamily:'Poppins-Regular', fontSize:14, color:'#FFFFFF'}}> +55 Classmates</Text>
                        </View>
                        <Gap height={1}/>
                        <View>
                            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:14, color:'#FFFFFF'}}>{`See more >>`}</Text>
                        </View>
                    </View>
                </View>
            </View>
      </View>
      <View style={styles.textInput}>

      </View>
      <View style={styles.content}>

      </View>
    </View>
  )
}

export default Academic

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#356CB1',
        height: 176,
        width: '100%',
        marginTop: 14,
        borderRadius: 15,
        flexDirection:'column',
        padding:18
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
      textInput:{},
      content:{}
})