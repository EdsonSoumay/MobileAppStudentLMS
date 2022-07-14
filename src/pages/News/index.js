import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../../components'
import { Images1, TimeIcon } from '../../assets'

const News = (props) => {
  return (
    <>
    <View style={styles.header}>
        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 20, color:'#FFFFFF'}}>News</Text>
    </View>
    <Gap height={8}/>
    <View style={styles.body}>
            <View style={styles.category}>
                <View>
                    <Text style={[styles.categoryText, {color:'#000000'}]}>All news</Text>
                    <Gap height={7}/>
                    <View style={{height: 7,borderRadius:20, width:'50%', backgroundColor:'#648EC1'}}/>
                </View>
                <View>
                    <Text style={styles.categoryText}>Unklab</Text>
                </View>
                <View>
                    <Text style={styles.categoryText}>FIK</Text>
                </View>
            </View>
            <Gap height={8}/>
            <View style={styles.content}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('EachNews')} style={styles.card}>
                    <View style={styles.image}>
                        <Image
                            style={styles.imageNews}
                            source={Images1}
                            />
                    </View>
                    <View style={styles.besideImage}>
                        <View>
                            <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#727272'}}>FIK</Text>
                        </View>
                        <View>
                            <Text style={{fontFamily:'Poppins-Medium', fontSize: 17, color:'#070707'}}>Lorem ipsum dolor sit</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TimeIcon />
                            <Gap width={7}/>
                            <Text style={{fontFamily:'Poppins-Medium', fontSize: 13, color:"#8F8F8F"}}>10 menit</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    </View>
    </>
  )
}

export default News

const styles = StyleSheet.create({
    header:{
        height: 107,
        backgroundColor:'#356CB1',
        justifyContent:'center',
        paddingHorizontal: 39
    },
    body:{
        backgroundColor:'#FFFFFF',
        flex: 1
    },
    category:{
        flexDirection:'row',
        justifyContent:"space-around"
    },
    content:{
            alignItems:'center'
    },
    categoryText:{
        fontFamily:'OpenSans-Bold',
        fontSize: 17,
        color: '#A3A3A3'
    },
    card:{
        flexDirection:'row',
        width: '80%',
        backgroundColor:'#FFFFFF',
        borderWidth:2,
        borderColor:'#E8E8E8',
        height: 113,
        borderRadius: 14,
        justifyContent:'space-around',
        alignItems:'center'
    },
    imageNews:{
        height: 79,
        width: 75,
        borderRadius: 14
    },
    besideImage:{
        // backgroundColor:'salmon',
        height: 79,
        justifyContent:'space-around'
    }
})