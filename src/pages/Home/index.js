import {  Animated, Alert, Modal,Pressable, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import { BellIcon, Class1Ilustration, Class2Ilustration,Class3Ilustration , CloseIcon, Images1, SearchIcon, SettingIcon } from '../../assets'
import { Gap } from '../../components'
import ListClass from '../../assets/json/ListClass.json';

const AddClass = ({visible, children}) => {
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
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

const Notification = ({visible, children}) => {
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



const Home = () => {
    const path = '../../assets/ilustrations/class2-ilustration.png'
    const [visible, setVisible] = React.useState(false);
    const [NotificationVisible, setNotificationVisible] = React.useState(false);


  return (
    <>
        <View style={styles.header}>
            <Gap height={60}/>
            <View style={styles.headerContent}>
                    {/* <Gap width="2%"/> */}
                    <TouchableOpacity>
                        <Image
                            source={Images1}
                            style={styles.tinyLogo}
                            />
                    </TouchableOpacity>
                    <Gap width={15}/>
                    <TouchableOpacity>
                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:22, color:'#FFFFFF'}}>Halo,  Josh</Text>
                    </TouchableOpacity>
                <Gap width="40%"/>
                <View style={{flexDirection:'row', maxWidth:100, alignItems:'flex-end', justifyContent:'space-between'}}>
                    <TouchableOpacity 
                    onPress={() => setNotificationVisible(true)}
                    style={styles.notificationAndSettingIcon}>
                        <BellIcon
                            height= "80%"
                            width= "80%"
                        />
                        <View
                            style={{width:10, height:10, backgroundColor:'#F76E11', borderRadius:10, borderWidth:0, position:'absolute', top:-3, right:-3, justifyContent:'center', alignItems:'center'}}>
                        </View>
                    </TouchableOpacity>
                   <Gap width={25}/>
                    <TouchableOpacity style={styles.notificationAndSettingIcon}>
                        <SettingIcon
                            height= "80%"
                            width= "80%"
                        />
                    </TouchableOpacity>
                <Gap width='2%'/>
                </View>
            </View>
       </View>

        <View style={{flex: 1, backgroundColor:'#F6F6F6'}}>
        {/* <Gap height={47}/> */}
       <View style={styles.searchSection}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                // onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
            <SearchIcon style={styles.searchIcon} />
        </View>

        <ScrollView style={styles.bodyContent}>
            {
                ListClass.ListClass.map((data, i)=>{    
                    return(
                    <TouchableOpacity style={[styles.classCard, {backgroundColor:data.color}]} 
                        key={`index:${i}`}
                        // onPress={()=>alert()}
                        >
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>

                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Class1Ilustration style={{ marginleft:13, marginVertical:22,}}  />
                            </View>

                            <View style={{ flexDirection:'column', marginVertical:22, marginleft:13,}}>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Bold', fontSize:15, color:'#FFFF'}}>{data.MK}</Text>
                                    </View>
                                    <Gap height={30}/>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'#FFFF'}}>Paralel: {data.paralel} </Text>
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'#FFFF'}}>({data.Schedule})</Text>
                                    </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
                })
            }
            </ScrollView>

            {/* Add Class Modal */}
            <AddClass visible={visible}>
                 <View>
                   <View style={styles.headerPopUp}>
                     <TouchableOpacity onPress={() => setVisible(false)}>
                          <CloseIcon width={12} height={12}/>
                     </TouchableOpacity>
                   </View>
                   <View style={{marginBottom:19, marginLeft:24.11}}>
                    <Text style={{fontFamily:'Poppins-Medium', fontSize:15, color:'#000000'}}>Enter Your Class code</Text>
                   </View>
                   <View style={styles.textInputContainer}>
                      <View>
                        <TextInput 
                          style={styles.textInputClassCode}
                          placeholder='ex : o239zz'
                        />
                      </View>
                      <TouchableOpacity style={styles.joinClass}>
                        <Text style={{color:'#FFFF', fontFamily:'Poppins-Medium', fontSize:12}}>JOIN</Text>  
                      </TouchableOpacity>
                   </View>
                 </View>
            </AddClass>
            {/*Add Class Modal */}

            {/* Add Notification Modal */}
            <Notification visible={NotificationVisible}>
                 <View style={{marginHorizontal:15}}>
                  <View style={styles.headerPopUp}>
                     <TouchableOpacity onPress={() => setNotificationVisible(false)}>
                          <CloseIcon width={12} height={12}/>
                     </TouchableOpacity>
                  </View>
                  <Gap height={12}/>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                      <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:20, color:'#000000'}}>Notifications</Text>
                    </View>
                    <View>
                      <Text style={{fontFamily:'Poppins-Medium', fontSize:11}}>mark all as read</Text>
                    </View>
                  </View>
                  <Gap height={29}/>
                  <View style={styles.notificationCategoryContainer}>
                    <View style={styles.categoryNotication}>
                    <View style={styles.categoryName}>
                        <Text style={[styles.categoryTextName, {color:'#000000'}]}>All</Text>
                      </View>
                      <View style={[styles.categoryCount,{backgroundColor:'#000000'}] }>
                        <Text style={styles.categoryCountText}>3</Text>
                      </View>
                    </View>
                    <View style={styles.categoryNotication}>
                      <View style={styles.categoryName}>
                        <Text style={styles.categoryTextName}>Class</Text>
                      </View>
                    <View style={[styles.categoryCount,{backgroundColor:'#C4C4C4'}] }>
                        <Text style={styles.categoryCountText}>2</Text>
                      </View>
                    </View>
                    <View style={styles.categoryNotication}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTextName}>Academic</Text>
                      </View>
                    <View style={[styles.categoryCount,{backgroundColor:'#C4C4C4'}] }>
                        <Text style={styles.categoryCountText}>1</Text>
                      </View>
                    </View>
                  </View>
                  <Gap height={11}/>
                  <View style={{borderColor:'#C4C4C4', borderWidth:1, width:'100%'}}/>
                  <View style={styles.content}>
                  <Gap height={18}/>
                    <View>
                      <Text style={{fontFamily:'Poppins-Medium', fontSize:18, color:'#000000'}}>TODAY</Text>
                    </View>
                    <Gap height={18}/>

                  {/* Card Notification  */}
                    <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                          <View>
                            <Image
                                source={Images1}
                                style={styles.tinyLogo}
                                />
                          </View>
                          <Gap width={9}/>
                          <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                              <View>
                                <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:14, color:'#000000'}}>Jhon Doe</Text>
                              </View>
                              <Gap width={11}/>
                              <View style={{flexDirection:'row',}}>
                                  <View>
                                    <Text>Class</Text>
                                  </View>
                                  <Gap width={6}/>
                                  <View>
                                    <Text>|</Text>
                                  </View>
                                  <Gap width={6}/>
                                  <View>
                                    <Text>2h Ago</Text>
                                  </View>
                              </View>
                            </View>
                            <View > 
                              <Text style={{fontFamily:"Popins-Regular", fontSize:14, color: '#000000', width:250}}>Upload a class task in class Organization Behavior</Text>
                            </View>
                          </View>
                        </View>
                    </TouchableOpacity>



                  </View>
                 </View>
            </Notification>
            {/* Add Notification Modal */}



            <TouchableOpacity 
            onPress={() => setVisible(true)}
            style={styles.addClassContainer}>
                <View style={styles.addClassSubContainer}>
                    <Text style={{color:'#FFFFFF', fontSize:35}}>+</Text>
                </View>
            </TouchableOpacity>
            </View>
        
     </>
  )
}

export default Home

const styles = StyleSheet.create({
    addClassContainer:{
        height: 67, 
        width: 67, 
        borderRadius: 67/2, 
        backgroundColor:'#FFFF',
        position:'absolute', 
        top: '75%', 
        right: 29,
        justifyContent:'center',
        alignItems:'center'
    },
    addClassSubContainer:{
        height: 60, 
        width: 60, 
        borderRadius: 60/2, 
        backgroundColor:'#356CB1',
        justifyContent:'center',
        alignItems:'center'
    },
    bodyContent:{
        marginHorizontal:15,
        // flex: 1
        marginTop: 0,
        backgroundColor:'#fffff'
    },

    classCard:{
        height:138,
        width:'100%',
        borderRadius:14,
        marginBottom:15
    },
    header:{
        backgroundColor: '#356CB1',
        width:'100%',
        height:125,
    },
    headerContent:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginHorizontal:15        
    },
    tinyLogo: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2
      },
      profile:{
            flexDirection:'row',
            alignItems:'center'
      },
      notificationAndSettingIcon:{
        height:24.63,
        width:24.63,
        backgroundColor:'#FFFFFF',
        borderRadius:24.63/2,
        alignItems:'center',
        justifyContent:'center'
      
      },
      searchSection: {
        marginHorizontal:15,
        marginTop: 47,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    searchIcon: {
        padding: 10,
        position:'absolute', top:13, right:15
        
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: '#424242',
        borderColor:'#969696',
        borderWidth:1,
        borderRadius: 14,
        height:46,
        width:'90%'
    },

    //Add Class Modal
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
     modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            // justifyContent: 'center',
            alignItems: 'center',
        },
    modalContainer: {
        marginTop:80,
        width: '85%',
        height:160,
        backgroundColor: 'white',
        // paddingHorizontal: 20,
        // paddingVertical: 30,
        borderRadius: 14,
        elevation: 200,
    },
    headerPopUp:{
      alignItems:'flex-end',
      paddingTop:11,
    },
    textInputClassCode:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        // borderWidth:1,
        borderColor:'black',
        width:200
    },
    textInputContainer:{
      // backgroundColor:'red'
      flexDirection:'row',
      borderRadius:14,
      borderWidth:2.1,
      borderColor:'#E8E8E8',
      marginHorizontal: 24.11,
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:10.48
    },
    joinClass:{
      
      justifyContent:'center',
      alignItems:'center',
      borderRadius:14,
      height:28,
      width:67,
      backgroundColor:'#356CB1'
    },
    // Notification Pop Up Modal
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
    notificationCategoryContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
    },
    categoryNotication:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    categoryName:{
      marginRight:4
    },
    categoryCount:{
      height:23,
      width:23,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 4
    },
    categoryCountText:{
      color: '#FFFF',
      fontSize:14,
      fontFamily:'Poppins-Medium',
    },
    categoryTextName:{
      fontSize:14,
      fontFamily:'Poppins-Medium',
    },
    content:{
      marginHorizontal:10
    }

})
