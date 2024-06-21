import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React, {FC, useRef} from 'react';
import Screen from '../ui/Screen';
import CustomText from '../ui/CustomText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BottomSheet from '@gorhom/bottom-sheet';
import {RootStackParamList} from '../AppNavigator';
import {COLORS, DIMENSIONS, FONT_SIZE} from '../utils';
import OnboardingItem from '../ui/OnboardingItem';

const STEPS = [
  {
    description: 'Tapping this lottie opens the bottom sheet.',
    lottie: require('../assets/o2.json'),
    action: 'sheet',
  },
  {
    description:
      'Tapping this plays 33% of the frames at a time of this lottie.',
    lottie: require('../assets/o3.json'),
    action: 'progress',
  },
  {
    description:
      'Tapping this lottie launches a in-app webview with user details',
    lottie: require('../assets/o1.json'),
    action: 'webview',
  },
];

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const Onboarding: FC<ScreenProps> = ({route, navigation}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const {email = ''} = route.params;

  const onPressLottie = (action: string) => {
    switch (action) {
      case 'sheet':
        onOpenSheet();
        break;
      case 'webview':
        navigation.navigate('Webview', {email});
        break;
      default:
        break;
    }
  };

  const onPressLogout = () => {
    navigation.replace('Landing');
  };

  const onOpenSheet = () => {
    sheetRef.current?.expand();
  };

  return (
    <>
      <Screen>
        <View style={styles.header}>
          <View style={styles.row}>
            <Image source={require('../assets/avatar.png')} />
            <CustomText bold size={FONT_SIZE.LARGE}>
              {email}
            </CustomText>
          </View>
          <Pressable onPress={onPressLogout}>
            <CustomText bold color={COLORS.PLACEHOLDER}>
              logout
            </CustomText>
          </Pressable>
        </View>
        {/* <GestureDetector gesture={fling}> */}
        <View style={styles.container}>
          <FlatList
            data={STEPS}
            horizontal
            renderItem={({item, index}) => (
              <OnboardingItem
                item={item}
                onPress={onPressLottie}
                total={STEPS.length}
                index={index}
              />
            )}
            pagingEnabled
            snapToAlignment="center"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            disableIntervalMomentum
            snapToInterval={
              DIMENSIONS.WIDTH - DIMENSIONS.PADDING_HORIZONTAL * 2
            }
          />
        </View>
        {/* </GestureDetector> */}
      </Screen>
      <Pressable style={styles.footer} onPress={onOpenSheet}>
        <Image source={require('../assets/caret.png')} style={styles.caret} />
        <View style={styles.bottomSheetArc} />
        <CustomText size={FONT_SIZE.XLARGE} bold center>
          Bottom Sheet
        </CustomText>
      </Pressable>
      <BottomSheet
        style={styles.sheet}
        enablePanDownToClose
        index={-1}
        handleComponent={null}
        snapPoints={[DIMENSIONS.HEIGHT]}
        ref={sheetRef}>
        <View style={styles.sheetContainer}>
          <Pressable
            onPress={() => sheetRef.current?.close()}
            style={styles.closeCaretContainer}>
            <Image
              source={require('../assets/caret.png')}
              style={[styles.caret, styles.caretClose]}
            />
          </Pressable>
          <CustomText
            size={FONT_SIZE.XLARGE_1}
            center
            style={styles.sheetContent}>
            This is a{' '}
            <CustomText size={FONT_SIZE.XLARGE_1} bold>
              bottom sheet
            </CustomText>
            , launched by tapping the lottie or swiping up
          </CustomText>
        </View>
      </BottomSheet>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 20,
  },
  caret: {
    width: 40,
    height: 40,
    marginLeft: DIMENSIONS.WIDTH * 0.5 - 20,
    marginBottom: DIMENSIONS.WIDTH * 0.12,
  },
  caretClose: {
    marginLeft: 0,
    transform: [{rotate: '180deg'}],
  },
  bottomSheetArc: {
    position: 'absolute',
    bottom: -DIMENSIONS.WIDTH * 2.8,
    left: -DIMENSIONS.WIDTH * 1,
    width: DIMENSIONS.WIDTH * 3,
    height: DIMENSIONS.WIDTH * 3,
    borderRadius: DIMENSIONS.WIDTH * 3,
    backgroundColor: COLORS.SHEET_ARC,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
  sheet: {
    width: '100%',
    backgroundColor: COLORS.SCREEN_BG,
  },
  sheetContainer: {
    width: '100%',
    flex: 1,
    paddingVertical: DIMENSIONS.PADDING_VERTICAL,
    backgroundColor: COLORS.SCREEN_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetContent: {
    maxWidth: '60%',
    textAlign: 'center',
    lineHeight: 28,
  },
  closeCaretContainer: {
    position: 'absolute',
    top: 20,
  },
});
