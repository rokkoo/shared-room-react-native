import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

// Screens
import List from '../components/houseList';
import Information from '../pages/house-information';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode={'screen'} screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={List}
        options={{
          title: 'My profile',
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
