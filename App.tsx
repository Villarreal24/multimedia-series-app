import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { App } from './src/';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';

import 'react-native-gesture-handler';

const MainApp = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  </Provider>
);

export default MainApp;
