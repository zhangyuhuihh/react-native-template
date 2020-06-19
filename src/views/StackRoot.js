import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerRoot from './DrawerRoot'
import PageOne from './stackNavigations/PageOne'

const Stack = createStackNavigator()

const StackRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'DrawerRoot'}>
        <Stack.Screen
          name="DrawerRoot"
          options={{ headerShown: false }}
          component={DrawerRoot}
        />
        <Stack.Screen name="PageOne" component={PageOne} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRoot
