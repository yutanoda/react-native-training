import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/MemoList';
import Appbar from './src/components/Appbar';
import CircleButton from './src/elements/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar></Appbar>
      <MemoList></MemoList>
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },

});
