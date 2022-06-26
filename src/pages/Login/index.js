import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { HeaderInLoginIlustration, Hide } from '../../assets'
import { Gap, Button } from '../../components'
const Login = () => {
  return (
    <KeyboardAvoidingView 
    behavior ="padding"
    style={{flexDirection:'column', backgroundColor:'#FFFFF'}}>
        <View style={{height: 240}}>
            <HeaderInLoginIlustration
                width= "100%"
                height= "100%"
                // viewBox= '0 0 354 180'
                preserveAspectRatio = "xMinYMin meet" // I've tried a few options here, including 'none'
            />
        </View>
        <Gap height={30}/>
      <View style={{marginHorizontal:45}}>
        <View>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:'#356CB1'}}>Log-in</Text>
        </View>
        <Gap height={30}/>
        <View>
                <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Nomor Regist</Text>
                <TextInput
                    style={styles.TextInputStyle}
                    />
            </View>
            <Gap height={30}/>
            <View>
            <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#01469F'}}>Password</Text>
                <View style={{marginLeft:"95%", top:20}}>
                    <Hide/>
                </View>
                <TextInput  style={styles.TextInputStyle}/>
            </View>
        <Gap height={50}/>
        <View>
            <Button name='Log In' color='#FFF' fam='Poppins-SemiBold' size={20} style={styles.btnSubmit}/>
        </View>
      </View>
    </KeyboardAvoidingView>
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
        height: 40,
        borderWidth: 1,
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0,
        padding: 10,
        borderColor:'#808080'
      }
})



// import React, {useEffect} from 'react';
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     TextInput,
//     Platform,
//     StyleSheet ,
//     StatusBar,
//     Alert
// } from 'react-native';

// import { HeaderInLoginIlustration, Hide } from '../../assets'
// import { Gap, Button } from '../../components'


// const Login = (props) => {

  

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//             <HeaderInLoginIlustration
//                 width= "100%"
//                 height= "100%"
//                 viewBox= '0 0 354 180'
//                 preserveAspectRatio = "xMinYMin meet" // I've tried a few options here, including 'none'
//             />
//             </View>
//             <View  style={{backgroundColor:'blue', flex: 1}}>
//                 <Text style={[styles.text_footer,{
//                 }]}>Username</Text>
//                 <View style ={styles.action}>
//                     <TextInput
//                         placeholder ="your Username"
                        
//                         autoCapitalize="none"
//                     />
                  
//                 </View>
//                 <Text >Passwords</Text>
//                 <View style ={styles.action}>
//                     <TextInput
//                         placeholder ="your Password"
                       
//                         // autoCapitalize="none"
//                     />
//                 </View>
//                 </View>
            
//         </View>
//     )
// }

// export default Login

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor:'#FFFFF'
//     },
//     header: {
//       backgroundColor:'red',
//         flex: 2,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingBottom: 50,
//         height: 240,
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },

//   });


