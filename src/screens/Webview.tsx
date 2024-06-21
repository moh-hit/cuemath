import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import {COLORS, DIMENSIONS} from '../utils';
import {RootStackParamList} from '../AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Webview'>;

const Webview: FC<ScreenProps> = ({route, navigation}) => {
  const {users} = useAuthStore();
  const {email} = route.params;

  const userData = users.find(u => u.email === email);

  const text = !userData
    ? 'User not found'
    : `This is a Webview, launched by ${userData.firstName}, they are ${userData.age} years old`;

  const html = `
  <body style=" background-color: black; width: 100hw; height: 75vh; padding: 200px; margin: 0; display: flex;flex-direction: column; justify-content: center; align-items: center;">
        <script>
          const onPressHome = () => {
            window.ReactNativeWebView.postMessage("home");
          };
        </script>
        <h1 style="color: white; font-size: 100px; text-align: center; margin-bottom: 100px;">
        ${text}
        </h1>
        <button onclick="onPressHome()" style="color: white; font-size: 50px; text-align: center; background-color: transparent; border: 5px solid white; border-radius: 24px; padding: 20px 40px;">
        Back to Home</button>
      </body>`;

  const onMessage = (event: WebViewMessageEvent) => {
    console.log(event.nativeEvent.data);
    if (event.nativeEvent.data === 'home') {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: html,
        }}
        containerStyle={styles.webview}
        onMessage={onMessage}
      />
    </View>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: DIMENSIONS.WIDTH,
    height: DIMENSIONS.HEIGHT,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLACK,
  },
});
