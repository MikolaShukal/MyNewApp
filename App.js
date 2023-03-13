//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './src/navigation/BottomNavigator';



export default function App() {
  return (
    
   <NavigationContainer>
    <MyTabs/>
   </NavigationContainer>
   
  );
}



