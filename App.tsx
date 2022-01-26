import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import Home from './src/modules/home';

const styles: Record<string, object> = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    flex: 1
  }
});

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar backgroundColor="black" />
    <Home />
  </SafeAreaView>
);

export default App;
