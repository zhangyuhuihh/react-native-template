import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function PageTwo() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>stack页面一</Text>
      <Button
        title="stack跳转drawer"
        onPress={() => {
          navigation.navigate('PageTwo')
        }}
      />
    </View>
  )
}

export default PageTwo
