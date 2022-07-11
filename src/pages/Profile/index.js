import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {launchImageLibrary} from 'react-native-image-picker';
import { Gap } from '../../components';

const Profile = () => {

    const [photo, setPhoto] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const getPhoto = async () => {
      const result = await launchImageLibrary({
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
      });
      if (result.didCancel) {
          if(!hasPhoto){
              setHasPhoto(false);
          }
      } else {
        setPhoto(result.assets[0].uri);
        setHasPhoto(true);
      }
    };

  return (
    <View style={{ backgroundColor:'#EEF1F7', flex: 1}}>
    <View style={styles.header}>
         <View style={styles.containerImage}>
            <View style={styles.avatarWrapper}>
                <View style={styles.border}>
                    <TouchableOpacity onPress={getPhoto} activeOpacity={0.5}>
                        {!hasPhoto && (
                            <View style={styles.addPhoto}>
                            <Text style={styles.addPhotoText}>Add Photo</Text>
                        </View>
                    )}
                        {hasPhoto && (
                            <Image source={{uri: photo}} style={styles.avatar} />
                    )}
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity 
                        onPress={()=>setHasPhoto(false)}
                        style={{width:20, height:20, backgroundColor:'orange', borderRadius:10, borderWidth:0, position:'absolute', top:3, right:5, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>x</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </View>
    <View style={styles.body}>
        <Gap height={25}/>
            <View style={{width:200}}>
                <Text style={{fontFamily:'OpenSans-Bold', fontSize: 26, color:'#000000'}}>Joshua Doe</Text>
            </View>
            <Gap height={16}/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.CategoryClass}>Current Class</Text>
                    <Text style={styles.CategoryClassCount}>3</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.CategoryClass}>All Class</Text>
                    <Text style={styles.CategoryClassCount}>33</Text>
                </View>
            </View>
            <View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>RELIGION</Text>
                    <Text style={styles.cardBody}>Kristen</Text>
                </View>  
                <Gap height={15}/>              
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>REGISTRATION NUMBER / NIM</Text>
                    <Text style={styles.cardBody}>105011810030/S21810088</Text>
                </View>  
                <Gap height={15}/>              
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>ACADEMIC STATUS</Text>
                    <Text style={styles.cardBody}>Active</Text>
                </View>  
                <Gap height={15}/>              
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>GENDER</Text>
                    <Text style={styles.cardBody}>Male</Text>
                </View>  
                <Gap height={15}/>              
            </View>
    </View>
       
    </View>                  
  )
}

export default Profile

const styles = StyleSheet.create({
    header:{
            height:'30%',
            justifyContent:'center'
    },
    containerImage:{
        alignItems:'center', 
        justifyContent:'center'
      },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
      },
      avatar: {
        height: 90,
        width: 90,
        borderRadius: 90,
      },
      addPhotoText: {
        fontSize: 12,
        fontFamily: 'Inter',
        maxWidth: 40,
        textAlign: 'center',
      },
    
      border: {
        borderWidth: 1,
        borderColor: '8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
      },
      avatarWrapper: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
      },
      body:{
        paddingHorizontal: 39,
        flex: 1,
        backgroundColor:'#FFFFFF',
        borderRadius: 15
      },
      card:{
        borderWidth:2,
        borderColor:'#E8E8E8',
        width: '100%',
        backgroundColor:'#FFFFFF',
        borderRadius: 14,
        paddingVertical: 11,
        paddingHorizontal:32
      },
      CategoryClass:{fontFamily:'OpenSans-SemiBold', fontSize:17, fontFamily:'#868686'},
      CategoryClassCount:{fontFamily:'Poppins-Medium', fontSize:20, color:'#000000'},
      cardTitle:{fontFamily:'OpenSans-SemiBold', fontSize:14, color:'#000000', opacity:0.64},
      cardBody:{fontFamily:'Poppins-SemiBold', fontSize:14, color:'#000000', opacity:0.80}

    
    
})
