import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MyTabs from './src/navigation/BottomNavigator';
import store, { persistor } from './src/store/store';

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(245, 233, 207, 1)',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={NavTheme}>
          <MyTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
