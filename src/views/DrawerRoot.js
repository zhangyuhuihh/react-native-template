import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import PageTwo from './drawerNavigations/PageTwo'
import HomePage from './drawerNavigations/HomePage'

const Drawer = createDrawerNavigator()

const DrawerRoot = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="PageTwo" component={PageTwo} />
    </Drawer.Navigator>
  )
}

export default DrawerRoot
