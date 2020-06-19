import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function PageTwo() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>drawer页面一</Text>
      <Button
        title="跳到stack页面"
        onPress={() => {
          navigation.navigate('PageOne')
        }}
      />
    </View>
  )
}

export default PageTwo
