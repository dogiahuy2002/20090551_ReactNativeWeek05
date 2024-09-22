import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './Screen01'
import Screen02 from './Screen02'
import Screen03 from './Screen03'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen01} />
        <Stack.Screen name="Details" component={Screen02} />
        <Stack.Screen name="Xong" component={Screen03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;