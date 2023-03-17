import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeButton = ({ focused }) => (
  <Ionicons name={focused ? 'home' : 'home-outline'} color="#7DB9B6" size={25} />
);

const FavoriteButton = ({ focused }) => (
  <Ionicons name={focused ? 'heart' : 'heart-outline'} color="#7DB9B6" size={25} />
);

const MyTabs = () => (
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
        headerStyle: {
          backgroundColor: '#F5E9CF',
        },
      }}
      name="Favorites"
      component={FavoritesScreen}
    />
  </Tab.Navigator>
);

export default MyTabs;
