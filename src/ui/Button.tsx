import {Pressable, PressableProps, StyleSheet, ViewStyle} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import CustomText from './CustomText';
import {COLORS, FONT_SIZE} from '../utils';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

type Props = PropsWithChildren<{
  style?: ViewStyle;
  outlined?: boolean;
  onPress?: () => void;
}> &
  PressableProps;

const CustomButton: FC<Props> = ({
  children,
  style,
  outlined,
  onPress,
  disabled,
  ...props
}) => {
  const buttonStyle = outlined ? styles.outlined : styles.filled;

  const onPressBtn = () => {
    if (onPress && !disabled) {
      RNReactNativeHapticFeedback.trigger('impactMedium', {
        ignoreAndroidSystemSettings: true,
      });
      onPress();
    }
  };

  return (
    <Pressable
      style={[styles.container, buttonStyle, style]}
      onPress={onPressBtn}
      {...props}>
      <CustomText
        bold
        size={FONT_SIZE.XLARGE}
        color={outlined ? COLORS.WHITE : COLORS.BLACK}>
        {children}
      </CustomText>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 24,
  },
  filled: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
});
