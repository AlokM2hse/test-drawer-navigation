import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "./normal/Splash"
import Parent from "./normal/Parent"

const Stack=createNativeStackNavigator()

const AppNavigator = () => {
  return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}/>
        <Stack.Screen options={{headerShown:false}} name='Parent' component={Parent}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator