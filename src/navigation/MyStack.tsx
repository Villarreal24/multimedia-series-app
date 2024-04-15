import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/Home';
import { Details } from '../views/Details';
import { Episode } from '../views/Episode';

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
      <Stack.Screen
        name="Episode"
        component={Episode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
