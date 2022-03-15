import React from 'react'
import {SafeAreaView} from 'react-native'

import {colors} from './src/config/colors'
import HomeScreen from './src/screens/Quiz/HomeScreen/HomeScreen'

const App = () => (
  <SafeAreaView
    style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.blue,
    }}
  >
    <HomeScreen />
  </SafeAreaView>
)

export default App
