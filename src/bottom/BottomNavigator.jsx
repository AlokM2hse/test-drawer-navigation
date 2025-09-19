import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{headerShown:false,tabBarIcon:()=> <AntDesign name='home' size={30}/>}}/>
            <Tab.Screen name='About' component={About} options={{headerShown:false,tabBarIcon:()=> <Ionicons name='person-outline' size={30}/>}}/>
            <Tab.Screen name='Contact' component={Contact} options={{headerShown:false,tabBarIcon:()=> <AntDesign name='contacts' size={30}/>}}/>

        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({})