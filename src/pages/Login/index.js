import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { HeaderInLoginIlustration } from '../../assets'
import { Gap, Button } from '../../components'

const Login = () => {
  return (
    <View 
        style={{flexDirection:'column', backgroundColor:'#FFFFF'}}
        >
        <View 
            style={{
                height: 240,
            }}
        >
            <HeaderInLoginIlustration
                width= "100%"
                height= "100%"
                // viewBox= '0 0 354 180'
                preserveAspectRatio = "xMinYMin meet" // I've tried a few options here, including 'none'
            />
        </View>
        <Gap height={30}/>
      <View style={{marginHorizontal:45}}>
<       View>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:'#356CB1'}}>Log-in</Text>
        </View>
        <Gap height={30}/>
<       View>
            <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Nomor Regist</Text>
            <TextInput
                 style={styles.TextInputStyle}
                />
        </View>
        <Gap height={30}/>
<       View>
        <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Password</Text>
            <TextInput
                style={styles.TextInputStyle}
                />
        </View>
        <Gap height={50}/>
<       View>
            <Button name='Sign In' color='#FFF' fam='Nunito-Regular' size={20} style={styles.btnSubmit}/>
        </View>
      </View>
    </View>
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
        height: 29,
        borderWidth: 1,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        padding: 10,
        borderColor:'#808080'
      }
})