import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AddContact,
  DetailContact,
  Home,
  SplashScreen,
  UpdateContact,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
