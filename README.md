# Getting Started

## Step 3: Install node_modules

First, you have to install **node_modules**, which contains all the library and packages.

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

If required for **iOS** install pods using

```bash
# go to ios
cd ios

# AND run
bundle exec pod install

# OR run
npx pod-install
```


## Step 2: Start the Metro Server

Then, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## About this App

This assignment consists of multiple screens like

 - Landing page ( CTA for signup and login)
 - Signup Screen and Login Screen
 - Onboarding/Home Screen
 - Bottomsheet
 - Webview screen
 
**Folder and Files** 
 - All of above screens are present under `screens folder`
 - This assignments also consists of `ui folder` which contains multiple custom components like input, text, button etc
 - Apart from that it has misc. folder and files like `assets` for all kinds of images and lotties, `utils.ts` for different style configs and `AppNavigator.tsx` for Navigation Container.
