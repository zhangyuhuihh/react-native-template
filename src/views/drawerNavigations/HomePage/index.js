import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function HomePage() {
  const navigation = useNavigation()

  const topBar = (
    <View style={styles.topBarContainer}>
      <Text>这里是头部</Text>
      <View style={styles.topBarBtnContainer}>
        <Button
          title="侧边栏"
          style={styles.topBarBtn}
          onPress={() => {
            navigation.openDrawer()
          }}
        />
      </View>
    </View>
  )

  return (
    <View>
      {topBar}
      <Text>这是首页</Text>
      <Button
        title="跳转drawer菜单"
        onPress={() => {
          navigation.navigate('PageTwo')
        }}
      />
      <Button
        title="跳转stack菜单"
        onPress={() => {
          navigation.navigate('PageOne')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  topBarContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarBtnContainer: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  topBarBtn: {
    width: 50,
    height: 50,
  },
})

export default HomePage
