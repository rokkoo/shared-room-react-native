import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import List from '../components/houseList';

const Information = () => {
  return (
    <View>
      <Text>Information page</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={List} />
      <Stack.Screen name="Information" component={Information} />
    </Stack.Navigator>
  );
};

export default Routes;
