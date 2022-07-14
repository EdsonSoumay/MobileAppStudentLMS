import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { HeaderInLoginIlustration, Hide } from '../../assets'
import { Gap, Button } from '../../components'
const Login = (props) => {
  return (
    <>
        <View >
            <HeaderInLoginIlustration
                width= "100%"
                // height= "100%"
                // // viewBox= '0 0 354 180'
                preserveAspectRatio = "xMinYMin meet" // I've tried a few options here, including 'none'
            />
        </View>
         <Gap height={30}/>
          <ScrollView style={{marginHorizontal:45}}>
            <View>
                <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:'#356CB1'}}>Log-in</Text>
            </View>
            <Gap height={30}/>
               <View>
                <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Nomor Regist</Text>
                  <View style={styles.TextInputStyle} >
                      <TextInput />
                  </View>
                </View>
                <Gap height={30}/>
                <View>
                <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Password</Text>
                  <View style={styles.TextInputStyle}>
                    <TextInput />
                     <Hide/>
                  </View>
                </View>
            <Gap height={50}/>
            <View>
                <Button 
                onPress={()=>props.navigation.replace('MainBottomTab')}  
                name='Log In' 
                color='#FFF' 
                fam='Poppins-SemiBold' 
                size={20} style={styles.btnSubmit} 
                />
            </View>
          </ScrollView> 
      </>
  )
}
export default Login

const styles = StyleSheet.create({
    btnSubmit:{
        marginBottom:15,
        height:56,
        width:"100%",
        borderRadius:14,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#356CB1'
      },
      TextInputStyle:{
        borderWidth: 1,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'#808080',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
})

