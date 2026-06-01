import React,
{
  useRef,
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';

import styles from '../styles';
import ProgressBar from '../components/ProgressBar';
import SessionRow from '../components/SessionRow';

export default function HomeScreen() {

  const progress =
    useRef(new Animated.Value(0))
      .current;

  const [sessions] = useState(
    Array.from(
      { length: 15 },
      (_, i) => ({
        id: i.toString(),
        title:
          `Study Session ${i + 1}`,
      })
    )
  );

  const startAnimation = () => {

    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const scaleX =
    progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });

  const opacity =
    progress.interpolate({
      inputRange: [0, 100],
      outputRange: [0.3, 1],
    });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Study Progress Tracker
      </Text>

      <ProgressBar
        animatedStyle={{
          opacity,
          transform: [{ scaleX }],
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={startAnimation}
      >
        <Text style={styles.buttonText}>
          Reset Animation
        </Text>
      </TouchableOpacity>

      <FlatList
        data={sessions}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <SessionRow item={item} />
        )}
      />

    </View>
  );
}
