import React from 'react'
import {Text, Pressable, PressableProps} from 'react-native'
import styles from './styles'

interface ButtonProps extends PressableProps {
  label: string
}

const Button = ({label, ...restProps}: ButtonProps) => (
  <Pressable style={styles.container} {...restProps}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
)
export default Button
