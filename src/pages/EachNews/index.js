import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftBlack, Images1, Images2 } from '../../assets'
import { Gap } from '../../components'

const EachNews = (props) => {
  return (
    <>
      <TouchableOpacity onPress={()=>props.navigation.goBack()} style={styles.header}>
          <ArrowLeftBlack />
      </TouchableOpacity>
      <Gap height={33}/>
      <View style={styles.body}>
            <View>
              <Text style={{fontFamily:'Poppins-Medium', fontSize: 15, color:'#6D6D6D'}}>FIK</Text>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 17, color:'#000000'}}>Lorem ipsum Dolor sit amet</Text>
            </View>
            <View>
              <Text style={{fontFamily:'Poppins-Regular', fontSize: 13, color:'#9A9A9A'}}>25 february 2022</Text>
            </View>
            <Gap height={13}/>
            <View style={{alignItems:'center'}}>
                <Image
                source = {Images2}
                style={styles.imageContent}
                />
                <Gap height={7}/>
                <Text style={{fontFamily:'Poppins-Medium', fontSize: 13, color:'#9A9A9A'}}>Credit,  freeimg.com</Text>
            </View>
            <Gap height={8}/>
      </View>
      <ScrollView style={{marginHorizontal: 33, fontFamily:'Poppins-Medium', fontSize: 13, color:'#000000'}}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It .
              </Text>
            </ScrollView>
            <Gap height={40}/>
    </>
  )
}

export default EachNews

const styles = StyleSheet.create({
  header:{
    marginHorizontal: 14,
    marginTop:10
  },
  imageContent:{
      height: 188,
      width: '100%'
  },
  body:{
    justifyContent:'center',
    marginHorizontal: 33
  }

})