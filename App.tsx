import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return null;
}

function SettingsScreen() {
  return null;
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Settings" component={SettingsScreen} />
     </Tab.Navigator>
   </NavigationContainer>
  );
}

export default App;
