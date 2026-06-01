import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

// React.memo prevents unnecessary re-renders.
// FlatList rows only update when their props change.
const SessionRow = memo(({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>
        {item.title}
      </Text>
    </View>
  );
});

export default SessionRow;
