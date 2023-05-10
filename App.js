import React, { useState } from 'react';
import { View, Text ,StyleSheet,TextInput,Button,Image,ImageBackground} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import form from "./form";
import Fatch from "./fatch";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="form" component={form} />
      <Stack.Screen name="Fatch" component={Fatch} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack