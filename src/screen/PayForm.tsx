import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PayForm = () => {
  return (
    <View style={styles.container}>
      <Text>Scan card and auto fill inputs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default PayForm;
