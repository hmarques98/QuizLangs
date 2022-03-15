import {StyleSheet} from 'react-native'
import {colors} from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.blueDarker,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 20,
  },

  text: {
    fontSize: 16,
    color: colors.blueDark,
    fontWeight: 'bold',
  },
})
export default styles
