import {ScrollView, StyleSheet} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {COLORS, DIMENSIONS} from '../utils';

type Props = PropsWithChildren<{
  showBackBtn?: boolean;
  isScrollable?: boolean;
}>;

const Screen: FC<Props> = ({children, isScrollable = false}) => {
  return (
    <ScrollView
      scrollEnabled={isScrollable}
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.SCREEN_BG,
    paddingHorizontal: DIMENSIONS.PADDING_HORIZONTAL,
    paddingVertical: DIMENSIONS.PADDING_VERTICAL,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
