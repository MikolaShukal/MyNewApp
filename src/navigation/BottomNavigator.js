import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
  
  
  
  const Tab = createBottomTabNavigator()
  
 export default function MyTabs () {
    return (
      <Tab.Navigator screenOptions={ {tabBarStyle:{
        backgroundColor: '#EADFC9',
        borderTopWidth: 2,
        borderTopColor:'#727272'
      },
      tabBarShowLabel: false
      }}>
    
        <Tab.Screen options={{ 
            headerShown: false , 
            tabBarIcon: (({color, size, focused}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={'#7DB9B6'} size={25}/>
            )),
        }} name='Home' component={HomeScreen}/>
        <Tab.Screen options={{
            tabBarIcon: (({color, size, focused}) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} color={'#7DB9B6'} size={25}/>))
        }} name='Favorites' component={FavoritesScreen}/>
      </Tab.Navigator>
    )
  }


