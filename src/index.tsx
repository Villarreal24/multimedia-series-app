import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './views/Home';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';

export const App = () => {
  return (
    <View style={styles.container}>
      {/* <Header />
      <Counter /> */}
      <StatusBar backgroundColor="#42A6C1" style="auto" />
      <View style={styles.componentsContainer}>
        <Home />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42A6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentsContainer: {
    marginTop: 30,
  },
});
