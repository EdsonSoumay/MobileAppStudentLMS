import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/pages/SplashScreen'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Academic from './src/pages/Academic'
import AcademicMember from './src/pages/AcademicMember'
import AcademicChat from './src/pages/AcademicChat'
import News from './src/pages/News'
import EachNews from './src/pages/EachNews'
import Discussion from './src/pages/Discussion'
import ForumClass from './src/pages/ForumClass'
import ForumClassPeople from './src/pages/ForumClassPeople'
import ForumClassTask from './src/pages/ForumClassTask'
// import Simulasi from './simulasi'
import SubmissionClassTask from './src/pages/SubmissionClassTask'

const App = () => {
  return (
   <>
    {/* <SplashScreen/> */}
    {/* <Login/> */}
    {/* <Home/> */}
    {/* <Academic/> */}
    {/* <AcademicMember/> */}
    {/* <AcademicChat/> */}
    {/* <News/> */}
    {/* <EachNews/> */}
    {/* <Discussion/> */}
    {/* <ForumClass/> */}
    {/* <ForumClassPeople/> */}
    {/* <ForumClassTask/> */}
     {/* <Simulasi/> */}
    <SubmissionClassTask/>
   </>
  )
}

export default App;