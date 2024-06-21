import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../ui/CustomText';
import Screen from '../ui/Screen';
import {COLORS, DIMENSIONS, FONT_SIZE} from '../utils';
import CustomInput from '../ui/Input';
import CustomButton from '../ui/Button';
import {RootStackParamList} from '../AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<ScreenProps> = ({navigation}) => {
  const {users} = useAuthStore();
  const [email, setEmail] = React.useState('mohit@gmail.com');
  const [password, setPassword] = React.useState('mohit');
  const [error, setError] = React.useState('');

  const onPressLogin = () => {
    if (!email || !password) {
      return setError('Please enter email and password');
    }
    const user = users.find(u => u.email === email);
    if (user) {
      if (user.password === password) {
        navigation.replace('Onboarding', {email});
      } else {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={40}
        contentContainerStyle={styles.container}>
        <CustomText size={FONT_SIZE.XLARGE_2} bold>
          CUEMATH{' '}
          <CustomText bold size={FONT_SIZE.XLARGE_2} color={COLORS.PRIMARY}>
            Go!
          </CustomText>
        </CustomText>
        <View style={styles.contentContainer}>
          <CustomInput
            placeholder="Email ID"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <CustomInput
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        {!!error && (
          <CustomText center color={COLORS.SECONDARY} size={FONT_SIZE.MEDIUM}>
            {error}
          </CustomText>
        )}
        <CustomButton onPress={onPressLogin}>Login</CustomButton>
      </View>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    gap: 20,
    marginTop: DIMENSIONS.HEIGHT * 0.1,
  },
  footer: {
    width: '100%',
    gap: 10,
    position: 'absolute',
    bottom: DIMENSIONS.PADDING_VERTICAL,
  },
});
