import React from 'react';
import { View, Animated } from 'react-native';
import styles from '../styles';

export default function ProgressBar({
  animatedStyle,
}) {
  return (
    <View style={styles.progressContainer}>
      <Animated.View
        style={[
          styles.progressBar,
          animatedStyle,
        ]}
      />
    </View>
  );
}
