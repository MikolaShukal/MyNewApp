import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const HomeButton = ({ focused }) => (
  <Ionicons name={focused ? 'home' : 'home-outline'} color="#7DB9B6" size={25} />
);

const FavoriteButton = ({ focused }) => (
  <Ionicons name={focused ? 'heart' : 'heart-outline'} color="#7DB9B6" size={25} />
);

export default () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#EADFC9',
        borderTopWidth: 2,
        borderTopColor: '#727272',
      },
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: HomeButton,
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: FavoriteButton,
      }}
      name="Favorites"
      component={FavoritesScreen}
    />
  </Tab.Navigator>
);
