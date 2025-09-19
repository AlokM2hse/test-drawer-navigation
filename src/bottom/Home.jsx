import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
     <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:32}}>Home</Text>
      <Button title='open drawer' onPress={()=>navigation.openDrawer()}/>
    </View>
  )
}

export default Home