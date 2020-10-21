import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import Appbar from './src/components/Appbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar></Appbar>
      <MemoListScreen></MemoListScreen>
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
