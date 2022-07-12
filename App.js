import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Home from './src/components/Home'
import SongsList from './src/components/SongsList'
import GameScreen from './src/components/GameScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: {
              backgroundColor: 'white',
            }
          }}
          defaultScreenOptions={{
            animationEnabled: true,
            animationTypeForReplace: 'pop',
          }}
          >
        <Stack.Screen name = "Home"
            component = {Home}
            options = {{title: 'Home'}}/>
        <Stack.Screen name = "SongsList"
            component = {SongsList}
            options = {{title: 'SongsList'}}/>
        <Stack.Screen name = "GameScreen"
            component = {GameScreen}
            options = {{title: 'GameScreen'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
