import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../ui/CustomText';
import {COLORS, DIMENSIONS, FONT_SIZE} from '../utils';
import CustomButton from '../ui/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppNavigator';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const Landing: FC<ScreenProps> = ({navigation}) => {
  const onPressSignup = () => {
    navigation.replace('Signup');
  };

  const onPressLogin = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <CustomText size={FONT_SIZE.XLARGE_4} bold>
        CUEMATH{' '}
        <CustomText bold size={FONT_SIZE.XLARGE_4} color={COLORS.PRIMARY}>
          Go!
        </CustomText>
      </CustomText>
      <View style={styles.row}>
        <CustomButton style={styles.btn} onPress={onPressSignup}>
          Signup
        </CustomButton>
        <CustomButton outlined style={styles.btn} onPress={onPressLogin}>
          Login
        </CustomButton>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: DIMENSIONS.HEIGHT * 0.1,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    width: DIMENSIONS.WIDTH * 0.4,
  },
});
