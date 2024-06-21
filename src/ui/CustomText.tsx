import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {FONT_FAMILY, FONT_SIZE} from '../utils';

type Props = {
  style?: TextStyle;
  children?: React.ReactNode;
  color?: string;
  bold?: boolean;
  center?: boolean;
  size?: (typeof FONT_SIZE)[keyof typeof FONT_SIZE];
} & TextProps;

const CustomText: FC<Props> = ({
  style,
  children,
  color,
  size,
  bold,
  center,
  ...props
}) => {
  const fontFamily = bold ? FONT_FAMILY.BOLD : FONT_FAMILY.MEDIUM;
  const fontWeight = bold ? 'bold' : 'normal';

  const textStyle = {
    color: color || '#fff',
    fontWeight,
    fontSize: size || FONT_SIZE.MEDIUM,
    fontFamily: fontFamily,
    textAlign: center ? 'center' : 'left',
  } as TextStyle;

  return (
    <Text style={[styles.text, textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
