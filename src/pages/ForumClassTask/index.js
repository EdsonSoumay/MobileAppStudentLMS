import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { ArrowLeftBlack, CalendarIcon, ClassTaskIlustration } from '../../assets'
import { Gap } from '../../components'
import ClassTask from '../../assets/json/ClassTask.json'

const ForumClassTask = () => {

    const [Category, setCategory] = useState('')
    const [ListClassTask, setListClassTask] = useState('')
    
    
    useEffect(() => {
        let newArray = []
        let arrDone = ClassTask.ClassTask.filter(x => x.status=== 'Done').length
        newArray.push({status:'Done',total: arrDone })
        let arrMissing = ClassTask.ClassTask.filter(x => x.status=== 'Missing').length
        newArray.push({status:'Missing',total: arrMissing })
        let arrInProgress = ClassTask.ClassTask.filter(x => x.status=== 'In Progress').length
        newArray.push({status:'In Progress',total: arrInProgress })
        newArray.push({totalKeseluruhanStatus: arrDone + arrInProgress + arrMissing})
        setCategory(newArray)
    }, [])
    
    useEffect(() => {
        setListClassTask(ClassTask.ClassTask)
    }, [ClassTask.ClassTask])
    

  return (
    <>
        <View style={{marginHorizontal: 16, marginTop: 10}}> 
            <ArrowLeftBlack/>
        </View>
        <View style={styles.header}>
            <View>
                <ClassTaskIlustration height={98}/>
            </View>
            <View style={{ justifyContent:'center'}}>
                    <View>
                        <Text style={{fontFamily:'OpenSans-Bold', fontSize:20, color:'#FFFFFF', maxWidth: 200}}> People </Text>
                    </View>
                    <View>
                        <Text style={[ styles.text, {fontFamily:'OpenSans-Regular', color:'#FFFFFF'}]}>Organization Behaviour</Text>
                    </View>
            </View>
        </View>
        <Gap height={22}/>
      <View style={styles.category}>
            {
            Category[3]?
            <TouchableOpacity style={[styles.eachCategory, {backgroundColor:'#356CB1'}]}>
                <Text style={[styles.textCategory, {color:'#FFFFFF'}]}>All { ` `}{Category[3].totalKeseluruhanStatus}</Text>
            </TouchableOpacity>
            :null
            }
             {
               Category?
                Category.map((category, i)=>{
                    if(category.totalKeseluruhanStatus){
                       return null
                    }
                    return(
                    <TouchableOpacity style={styles.eachCategory} key={i}>
                        <Text style={styles.textCategory}>{category.status}{` `} {category.total} </Text>
                    </TouchableOpacity>
                   )
                })
                : null
            }

      </View>
      <Gap height={15}/>
      <View style={styles.body}>

      {
        ListClassTask.map((data, i)=>{
            return(
                <View style={styles.card} key={i}>
                <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#FFFFFF'}}>{data.title}</Text>
                     </View>
                     <Gap height={6}/>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View>
                        <CalendarIcon/>
                        </View>
                        <Gap width={5}/>
                        <View>
                            <Text style={{fontFamily:'Poppins-Medium', fontSize: 13, color:'#FFFFFF'}}>{data.dueDate}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 14, color:'#FFFFFF'}}>{data.status}</Text>
                </View>
            </View> 
            )
        })
        
        }

      </View>
    </>
  )
}

export default ForumClassTask

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FC9393',
        height: 121,
        marginTop: 14,
        borderRadius: 15,
        flexDirection:'row',
        marginHorizontal: 16,
        justifyContent:'space-around',
        alignItems:'center'
    },
    category:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    eachCategory:{
        backgroundColor:'#F1F3F2',
        padding: 7,
        maxWidth: 105,
        maxHeight: 33,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 14
    },
    textCategory:{
        color:'#000000',
        fontFamily:'OpenSans-SemiBold',
        fontSize: 14
    },
    card:{
        backgroundColor:"#61AF77",
        // height: 80,
        marginBottom:15,
        marginHorizontal: 40,
        borderRadius: 14,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 22,
        paddingVertical: 13
    },
     body:{
        // alignItems:'center'
     }
})