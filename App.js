import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Draggable } from './Components/draggable';
import { Background } from './Components/background';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='home'
            component={Background}
          />
          <Stack.Screen 
            name='drag'
            component={Draggable}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
