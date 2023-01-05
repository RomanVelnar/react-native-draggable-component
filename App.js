import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name='home'
              component={Home}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
