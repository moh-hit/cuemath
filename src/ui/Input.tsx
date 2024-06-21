import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../utils';

type Props = TextInputProps;

const CustomInput: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={COLORS.PLACEHOLDER}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    padding: 12,
    fontSize: FONT_SIZE.XLARGE,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.WHITE,
    backgroundColor: '#000',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.BORDER,
  },
});
