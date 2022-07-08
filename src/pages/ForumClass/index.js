import { StyleSheet, Text, View, Image, TextInput, ScrollView, Modal, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import { Gap } from '../../components'
import { AboutIcon, ChatIcon, DiscussionIcon, Images1, CloseIcon,AboutAcademicIlustration, Images2, SendMessageIcon, ArrowLeftBlack, Class1Ilustration, AboutClassIlustration, PenIcon } from '../../assets'
import ClassContent from '../../assets/json/ClassContent.json'

const AboutPopUp = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View 
            style={[styles.modalContainerNotification, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };



const ForumClass = () => {

    const [AboutVisible, setAboutVisible] = React.useState(false);

  return (
    <>
        <View style={{marginHorizontal: 16, marginTop: 10}}> 
            <ArrowLeftBlack/>
        </View>
        <View style={styles.header}>
            <View>
                <Class1Ilustration height={98}/>
            </View>
            <View>
                <View style={{}}>
                    <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#FFFFFF', maxWidth: 200}}>Organization Behaviour </Text>
                </View>
                <View>
                    <Text style={[ styles.text, {fontFamily:'OpenSans-Regular', color:'#FFFFFF'}]}>Paralel B</Text>
                </View>
                <View>
                    <Text style={[ styles.text, {fontFamily:'OpenSans-Regular', color:'#FFFFFF'}]}>(Senin - Rabu, 14:40 - 16:00)</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end', }}>
                <TouchableOpacity
                 onPress={() => setAboutVisible(true)}
                 >
                <AboutIcon />
                </TouchableOpacity>
            </View>
        </View>
        <Gap height={15}/>
        <View style={styles.textInput}>
                <View>
                    <Image
                    source={Images1}
                    style={[styles.tinyLogo]}
                    />
                </View>
                <Gap width={20}/>
                <View>
                    <TextInput placeholder='Share to your class'/>
                </View>
        </View>
        <Gap height={15}/>
        <ScrollView style={{marginHorizontal:16}}>
        {
            ClassContent.ClassContent.map((data, i)=>{
                        console.log("data:",data)
                return(
                    data.type == 'Regular'?
                    <TouchableOpacity 
                        style={styles.content}
                        key={`index:${i}`}
                    >
                        <View style={styles.headerContent}>
                            <View>
                                <Image
                                    source={Images1}
                                    style={[styles.tinyLogo]}
                                    />
                            </View>
                            <Gap width={25}/>
                            <View style={{flexDirection:'column'}}>
                                    <View>
                                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:17, color:'#1E1E1E'}}>{data.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:13, color:"#3E3E3E"}}>{data.time}</Text>
                                    </View>
                            </View>
                            </View>
                            <Gap height={15}/>
                            <View style={styles.bodyContent}>
                                <Text style={{color:'#303030', fontFamily:'Poppins-Regular', fontSize:14}}>
                                    {data.content}
                                </Text>
                            </View>
                            <Gap height={30}/>
                            <View style={styles.comentContent}>
                                <View>
                                    <DiscussionIcon />
                                </View>
                                <Gap width={15}/>
                                <View>
                                    <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#676767'}}>{data.comment} Comment</Text>
                                </View>
                            </View>
                        </TouchableOpacity >
                        :
                        data.type == 'ASSIGMENT'|| 'QUIZ' ?
                        <TouchableOpacity 
                        style={styles.content}
                        key={`index:${i}`}
                          >
                            <View style={[styles.bodyContent, {paddingTop:16}]}>
                                <View style={{ width: 33, height: 33, borderRadius: 33/2, backgroundColor:'#F6F6F6', alignItems:'center', justifyContent:'center'}}>
                                    <PenIcon/>
                                </View>
                                <Gap width={23}/>
                                <View>
                                    <Text style={{color:'#303030', fontFamily:'Poppins-Regular', fontSize:14}}>
                                        {data.title}
                                    </Text>
                                    <Text style={{color:'#303030', fontFamily:'Poppins-Regular', fontSize:14}}>
                                        {data.time}|  {data.name}
                                    </Text>
                                </View>
                            </View>

                            <Gap height={30}/>
                            <View style={styles.comentContent}>
                                <View>
                                    <DiscussionIcon />
                                </View>
                                <Gap width={15}/>
                                <View>
                                    <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:'#676767'}}>{data.comment} Comment</Text>
                                </View>
                            </View>
                        </TouchableOpacity >
                        :null
                     
                     )
                    })
                }
            </ScrollView>

            {/* Add About Modal */}
            <AboutPopUp visible={AboutVisible}>
                  <View style={styles.headerPopUp}>
                     <TouchableOpacity onPress={() => setAboutVisible(false)}>
                          <CloseIcon width={12} height={12}/>
                     </TouchableOpacity>
                  </View>
                 <View style={styles.aboutPopUp}>
                  <View>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20, color:'#1E1E1E'}}>About Class </Text>
                  </View>
                  <View>
                   <AboutClassIlustration/>
                  </View>
                  <Gap height={21.13}/>
                  <View>
                    <Text style={{fontFamily:'Poppins-Regular', fontSize: 14, color:'#000000'}}>
                        Room : https://us02web.zoom.us/
                        Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry Lorem 
                        Ipsum is simply dummy text of the printings
                    </Text>
                  </View>
                  
                 </View>
            </AboutPopUp>
            {/* Add About Modal */}
    </>
  )
}

export default ForumClass;

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FC9393',
        height: 121,
        marginTop: 14,
        borderRadius: 15,
        flexDirection:'row',
        marginHorizontal: 16,
        paddingTop: 10,
        justifyContent:'space-around'
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
      textInput:{
        paddingHorizontal: 15,
        flexDirection:'row',
        borderWidth: 1,
        alignItems:'center',
        borderRadius: 14,
        borderColor:'#A7A7A7',
        marginHorizontal: 16,
      },
      content:{
        borderWidth:1,
        borderColor:'#949494',
        width:'100%',
        borderRadius: 14,
        marginBottom:15,
        },
      headerContent:{
        flexDirection:'row',
        marginTop: 23,
        marginHorizontal: 16,
      },
      bodyContent:{
        marginHorizontal: 16,
        flexDirection:'row',
        alignItems:'center'
    },
      comentContent:{
        height:39,
        backgroundColor:'#EFEFEF',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 16,
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14
    },
      text:{
        fontSize: 14
      },
      modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        // justifyContent: 'center',
        alignItems: 'center',
    },
      modalContainerNotification: {
        marginTop:80,
        width: '92%',
        height:404,
        backgroundColor: 'white',
        // paddingHorizontal: 20,
        // paddingVertical: 30,
        borderRadius: 14,
        elevation: 200,
      },
      headerPopUp:{
        alignItems:'flex-end',
        paddingTop:11,
        marginHorizontal:15
      },
      aboutPopUp:{
        alignItems:'center',
        marginHorizontal:15
    }
})