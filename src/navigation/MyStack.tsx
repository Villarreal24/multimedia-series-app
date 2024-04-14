import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/Home';
import { Details } from '../views/Details';

export default function MyStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
