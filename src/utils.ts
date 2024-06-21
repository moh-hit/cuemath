import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isIos = Platform.OS === 'ios';
const iosNeedPadding = DeviceInfo.hasNotch() || DeviceInfo.hasDynamicIsland();

const topPadding = iosNeedPadding ? 54 : isIos ? 20 : 0;

export const COLORS = {
  PRIMARY: '#FFBA07',
  WHITE: '#FFFFFF',
  BORDER: '#FFFFFF30',
  SHEET_ARC: '#2B2B2B',
  PLACEHOLDER: '#808080',
  BLACK: '#000000',
  SCREEN_BG: '#000',
  SECONDARY: '#FF7E3B',
};

export const FONT_SIZE = {
  XSMALL: 10,
  SMALL: 12,
  MEDIUM: 14,
  LARGE: 16,
  XLARGE: 18,
  XLARGE_1: 20,
  XLARGE_2: 24,
  XLARGE_3: 32,
  XLARGE_4: 40,
  XLARGE_5: 48,
};

export const FONT_FAMILY = {
  BOLD: 'Athletics Bold',
  MEDIUM: 'Athletics Medium',
  REGULAR: 'Athletics Regular',
};

export const DIMENSIONS = {
  WIDTH: width,
  HEIGHT: height,
  PADDING_VERTICAL: topPadding,
  PADDING_BOTTOM: 20,
  PADDING_HORIZONTAL: 16,
};
