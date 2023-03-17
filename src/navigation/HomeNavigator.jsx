import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DetaileScreen from '../screens/DetailesScreen';
import MyTabs from './BottomNavigator';

const Stack = createSharedElementStackNavigator();

const options = {
  headerShown: false,
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
};

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="List">
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="List"
      component={MyTabs}
    />
    <Stack.Screen options={() => options} name="Details" component={DetaileScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
