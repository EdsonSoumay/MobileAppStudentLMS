import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import { ArrowLeftBlack, CalendarBlackIcon, CalendarIcon, ClassTaskIlustration } from '../../assets'
import { Gap } from '../../components'
import ClassTask from '../../assets/json/ClassTask.json'

const ForumClassTask = () => {

    const [Category, setCategory] = useState('')
    const [ListClassTask, setListClassTask] = useState('')
    const [FilteredTask, setFilteredTask] = useState('')
    const [ActivedTask, setActivedTask] = useState()
    const [TempActivedTask, setTempActivedTask] = useState('All')

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
        FilteredTask?
        setListClassTask(FilteredTask)
        :
        setListClassTask(ClassTask.ClassTask)

        setActivedTask(TempActivedTask)
    }, [ClassTask.ClassTask, FilteredTask, TempActivedTask])
    

    const filterTask = (data, eachCategory) =>{
        setFilteredTask(data)
        setTempActivedTask(eachCategory)
    }

    const TypeCategoryFunc = (eachCategory) =>{
        if(eachCategory === "All"){
            let AllTask = ClassTask.ClassTask.filter(x => x)
           filterTask(AllTask, eachCategory)
        }
        if(eachCategory === "Done"){
            let DoneTask = ClassTask.ClassTask.filter(x => x.status === 'Done')
            filterTask(DoneTask, eachCategory)
        }
        if(eachCategory === "Missing"){
            let MissingTask = ClassTask.ClassTask.filter(x => x.status === 'Missing')
            filterTask(MissingTask, eachCategory)            
        } 
        if(eachCategory === "In Progress"){
            let InProgressTask = ClassTask.ClassTask.filter(x => x.status === 'In Progress')
            filterTask(InProgressTask, eachCategory)            
        }
    }

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
            <TouchableOpacity style={[styles.eachCategory, ActivedTask === 'All'? {backgroundColor:'#356CB1'} : {backgroundColor:'#F1F3F2'} ]}
            onPress={
                ()=>TypeCategoryFunc('All')
            }
            >
                <Text style={[styles.textCategory, ActivedTask === 'All'? {color:'#FFFFFF'} : {color:'#000000'} ]}>All { ` `}{Category[3].totalKeseluruhanStatus}</Text>
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
                    <TouchableOpacity style={[styles.eachCategory, ActivedTask === category.status? {backgroundColor:'#356CB1'} : {backgroundColor:'#F1F3F2'} ]} 
                    key={i}
                        onPress={
                            ()=>TypeCategoryFunc(category.status)
                        }
                    >
                        <Text style={[styles.textCategory, ActivedTask === category.status? {color:'#FFFFFF'} : {color:'#000000'} ]}>{category.status}{` `} {category.total} </Text>
                    </TouchableOpacity>
                   )
                })
                : null
            }

      </View>
      <Gap height={15}/>
      <ScrollView style={styles.body}>

      {
        ListClassTask?
        ListClassTask.map((data, i)=>{
            return(
                <View style={[styles.card, data.status === 'Done'?{backgroundColor:'#61AF77'}:data.status === 'In Progress'?{backgroundColor:'#FFFFFF', borderWidth: 1, borderColor:'#E8E8E8'}:data.status === 'Missing'?{backgroundColor:'#F9817E'}: null ]} key={i}>
                <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                    <View>
                        <Text 
                        style={
                             [styles.textTitleCard,
                                   data.status == "In Progress" ?
                                   {color:"#000000"}
                                   :
                                   {color:"#FFFFFF"},
                             ]  
                            }
                            >{data.title}</Text>
                     </View>
                     <Gap height={6}/>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View>
                            {
                                data.status === 'In Progress'?
                                <CalendarBlackIcon/>
                                :
                                 <CalendarIcon />   
                            }
                        </View>
                        <Gap width={5}/>
                        <View>
                            <Text style={[styles.textDueDateCard, data.status == "In Progress" ?
                                   {color:"#000000"}
                                   :
                                   {color:"#FFFFFF"},]}>{data.dueDate}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                    <Text style={[styles.textStatusCard, [styles.textTitleCard,
                                   data.status == "In Progress" ?
                                   {color:"#000000"}
                                   :
                                   {color:"#FFFFFF"},
                             ]  ]}>{data.status}</Text>
                </View>
            </View> 
            )
        }): null
        
        }

      </ScrollView>
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
        // backgroundColor:"#61AF77",
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
     },
     textTitleCard: {
     fontFamily:'OpenSans-SemiBold', fontSize: 17, color:'#FFFFFF'
     },
     textDueDateCard:{
        fontFamily:'Poppins-Medium', fontSize: 13
    },
    textStatusCard:{
        fontFamily:'Poppins-SemiBold', fontSize: 14, color:'black'
    }
})