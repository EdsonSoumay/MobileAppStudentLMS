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
    <EachNews/>
   </>
  )
}

export default App;