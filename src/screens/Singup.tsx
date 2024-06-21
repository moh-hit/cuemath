import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../ui/CustomText';
import Screen from '../ui/Screen';
import {COLORS, DIMENSIONS, FONT_SIZE} from '../utils';
import CustomInput from '../ui/Input';
import CustomButton from '../ui/Button';
import useAuthStore, {UserDetail} from '../store/authStore';
import {RootStackParamList} from '../AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Singup: FC<ScreenProps> = ({navigation}) => {
  const {setUsers, users} = useAuthStore();

  const [data, setData] = React.useState<UserDetail>({
    email: '',
    password: '',
    firstName: '',
    age: 0,
  });
  const [error, setError] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onSubmit = () => {
    if (users.find(user => user.email === data.email)) {
      setError('Email already exists');
      return;
    }
    if (data.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (data.password !== confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }
    if (typeof data.age !== 'number') {
      setError('Age must be a number');
      return;
    }
    setUsers(data);
    navigation.replace('Login');
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
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={text => setData({...data, email: text})}
          />
          <CustomInput
            placeholder="Password"
            secureTextEntry
            onChangeText={text => setData({...data, password: text})}
            textContentType="newPassword"
          />
          <CustomInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={setConfirmPassword}
            textContentType="newPassword"
          />
          <CustomInput
            placeholder="First Name"
            onChangeText={text => setData({...data, firstName: text})}
          />
          <CustomInput
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={text => setData({...data, age: Number(text)})}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        {!!error && (
          <CustomText center color={COLORS.SECONDARY} size={FONT_SIZE.MEDIUM}>
            {error}
          </CustomText>
        )}
        <CustomButton onPress={onSubmit}>Create Account</CustomButton>
      </View>
    </Screen>
  );
};

export default Singup;

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
