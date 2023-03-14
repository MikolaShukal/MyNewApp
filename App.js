//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './src/navigation/BottomNavigator';
import store from './src/app/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
   <Provider store={store}>
   <NavigationContainer>
    <MyTabs/>
   </NavigationContainer>
   </Provider>
  );
}



