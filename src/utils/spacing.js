import {Dimensions} from 'react-native';

export const DIMENSIONS = {
  WINDOW_HEIGHT: Dimensions.get('window').height,
  WINDOW_WIDTH: Dimensions.get('window').width,
};

export const WIDTH = {
  w0: DIMENSIONS.WINDOW_WIDTH,
  w150: DIMENSIONS.WINDOW_WIDTH / 2,
  w200: DIMENSIONS.WINDOW_WIDTH / 1.5,
};

export const HEIGHT = {
  h0: DIMENSIONS.WINDOW_HEIGHT,
  h150: DIMENSIONS.WINDOW_HEIGHT / 4,
};

export const SPACING = {
  SH15: DIMENSIONS.WINDOW_HEIGHT / 40,
  SW15: DIMENSIONS.WINDOW_WIDTH / 35,
};

export const FONTS = {
  f20: DIMENSIONS.WINDOW_HEIGHT * 0.022,
  f18: DIMENSIONS.WINDOW_HEIGHT * 0.02,
  f14: DIMENSIONS.WINDOW_HEIGHT * 0.016,
};
