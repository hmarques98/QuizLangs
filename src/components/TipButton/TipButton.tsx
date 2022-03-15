import React from 'react'
import {Pressable, Text, PressableProps} from 'react-native'
import styles from './styles'

interface TipButtonProps extends PressableProps {
  label: string
}

const TipButton = ({label, ...restProps}: TipButtonProps) => (
  <Pressable style={styles.container} {...restProps}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
)
export default TipButton
