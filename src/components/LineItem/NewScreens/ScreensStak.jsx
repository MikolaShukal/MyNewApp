import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ListScreen from './ListScreen';
import DetaileScreen from './DetailesScreen';

const Stack = createSharedElementStackNavigator();

const StackScreen = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="List">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetaileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackScreen;
