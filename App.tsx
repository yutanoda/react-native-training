import React from 'react';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Root = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen 
          name="MemoListScreen" 
          component={MemoListScreen} 
          options={ options } />
        <Root.Screen 
          name="MemoDetailScreen" 
          component={MemoDetailScreen} 
          options={ options } />
        <Root.Screen 
          name="MemoEditScreen" 
          component={MemoEditScreen} 
          options={ options } />
        <Root.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={ options } />
        <Root.Screen 
          name="SignupScreen" 
          component={SignupScreen} 
          options={ options } />
      </Root.Navigator>
    </NavigationContainer>
  )
}

const options =  { title: 'Memot', headerStyle: {backgroundColor: '#265366'}, headerTitleStyle: {color: '#fff'} }

