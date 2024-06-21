import {Pressable, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import LottieView from 'lottie-react-native';
import CustomText from './CustomText';
import {DIMENSIONS, FONT_SIZE} from '../utils';
import Stepper from './Stepper';

type Props = {
  item: {
    description: string;
    lottie: any;
    action: string;
  };
  index: number;
  total: number;
  onPress: (action: string) => void;
};

const OnboardingItem: FC<Props> = ({item, onPress, index, total}) => {
  const lottieRef = React.useRef<LottieView>(null);
  const [currentFrame, setCurrentFrame] = React.useState(0);

  const onPressLottie = () => {
    if (item.action === 'progress') {
      const nextFrame = currentFrame + 30;
      if (nextFrame <= 90) {
        lottieRef.current?.play(currentFrame, nextFrame);
        setCurrentFrame(currentFrame + 30);
      } else {
        lottieRef.current?.reset();
        setCurrentFrame(0);
      }

      return;
    }
    onPress(item.action);
  };

  const autoPlay = item.action !== 'progress';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLottie}>
        <LottieView
          ref={lottieRef}
          source={item.lottie}
          autoPlay={autoPlay}
          loop={autoPlay}
          duration={3000}
          style={styles.lottie}
          progress={0}
        />
      </Pressable>
      <Stepper total={total} currentIndex={index} />
      <CustomText center size={FONT_SIZE.XLARGE_1} style={styles.text}>
        {item.description}
      </CustomText>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS.WIDTH - DIMENSIONS.PADDING_HORIZONTAL * 2,
    height: DIMENSIONS.HEIGHT * 0.5,
    gap: 10,
  },
  lottie: {
    width: DIMENSIONS.WIDTH * 0.75,
    height: DIMENSIONS.WIDTH * 0.75,
  },
  text: {
    lineHeight: 24,
    maxWidth: DIMENSIONS.WIDTH * 0.75,
  },
});
