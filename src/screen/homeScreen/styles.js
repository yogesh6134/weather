import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '../../utils/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.SW15,
  },
  mainHeadingBox: {
    width: WIDTH.w200,
    // backgroundColor: 'red',
  },
  weatherIcon: {
    width: WIDTH.w150,
    height: HEIGHT.h150,
  },
  heading: {
    fontSize: FONTS.f20,
    color: COLORS.black,
    fontWeight: '700',
  },
  text: {
    fontSize: FONTS.f18,
    color: COLORS.black,
    fontWeight: '400',
  },
  temperature: {
    fontSize: FONTS.f18,
    color: COLORS.blue,
    fontWeight: '600',
    marginLeft: 20,
  },
});
