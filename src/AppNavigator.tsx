import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Singup from './screens/Singup';
import Onboarding from './screens/Onboarding';
import Webview from './screens/Webview';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
  Onboarding: {email: string};
  Webview: {email: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#000',
          },
        }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Singup} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Webview" component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
