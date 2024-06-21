import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../utils';

type Props = {
  total: number;
  currentIndex: number;
};

const Stepper: FC<Props> = ({total, currentIndex}) => {
  return (
    <View style={styles.container}>
      {Array(total)
        .fill(0)
        .map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <View
              key={index}
              style={[styles.step, isActive && styles.activeStep]}
            />
          );
        })}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  activeStep: {
    backgroundColor: COLORS.WHITE,
  },
});
