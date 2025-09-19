import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Main from './Main'
import Second from './Second'
import CustomHeader from './CustomHeader'
import CustomDrawer from './CustomDrawer'
import { Dimensions } from 'react-native'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const { width } = Dimensions.get('window');

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: ({ route }) => <CustomHeader title={route.name} />,
        drawerStyle: {
      width: width * 0.7, // 80% of screen width
    },
      }}
    >
      {/* Register all possible screens */}
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Second" component={Second} />
      <Drawer.Screen name="Course" component={Main} />
      <Drawer.Screen name="addCourse" component={Second} />
      <Drawer.Screen name="sub-menu1" component={Second} />
      <Drawer.Screen name="sub-menu2" component={Main} />
      <Drawer.Screen name="sub-menu3" component={Second} />
      <Drawer.Screen name="sub-item2-1" component={Second} />
      <Drawer.Screen name="sub-item2-2" component={Main} />
      <Drawer.Screen name="sub-item2-3" component={Second} />
      <Drawer.Screen name="sub-item2-4" component={Main} />
      <Drawer.Screen name="sub-item2-5" component={Second} />
      <Drawer.Screen name="sub-item2-6" component={Main} />
      <Drawer.Screen name="sub-menu4" component={Second} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
