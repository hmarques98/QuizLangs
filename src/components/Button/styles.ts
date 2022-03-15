import {StyleSheet} from 'react-native'
import {colors} from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.blueDark,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    padding: 20,
    borderRadius: 40,
    width: '100%',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: colors.blueDark,
    fontWeight: 'bold',
  },
})
export default styles
