// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, {useState} from 'react'

// const newArray = ['dua', 'tiga', 'empat', 'lima'];

// const Simulasi = () => {
//     const [ChangeColor, setChangeColor] = useState('satu')

//     const funcChangeColor = (data) =>{
//         setChangeColor(data)
//     }
    
//     return (
//     <>
//     <View>
//         <TouchableOpacity
//                         style={
//                            [ 
//                             styles.card,
//                             ChangeColor == 'satu' ?
//                             { backgroundColor:'salmon'}
//                             :
//                             null
//                         ]
//                         }
//                         onPress={
//                             ()=>funcChangeColor('satu')
//                         }
//                     >
//                         <Text style={styles.text}>satu</Text>
//                     </TouchableOpacity>
//         {
//             newArray.map((data, i)=>{
//                 return(
//                     <TouchableOpacity
//                         style={
//                            [ 
//                             styles.card,
//                             ChangeColor == data ?
//                             { backgroundColor:'salmon'}
//                             :
//                             null
//                         ]
//                         }
//                         key={data}
//                         onPress={
//                             ()=>funcChangeColor(data)
//                         }
//                     >
//                         <Text style={styles.text}>{data}</Text>
//                     </TouchableOpacity>
                    
//                 )
//             })
//         } 
//     </View>
//     </>
//   )
// }

// export default Simulasi

// const styles = StyleSheet.create({
//     card:{height: 50, width: '70%', margin: 30, alignItems:'center', justifyContent:'center', borderWidth: 2, borderColor:'black'},
//     text:{fontSize: 25, color:'black'}
// })