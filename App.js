import React from 'react';
import {SafeAreaView, Dimensions, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationNativeContainer} from '@react-navigation/native';

// Store
import store from './src/store';

// Components
import HoseList from './src/components/houseList';
import Routes from './src/navigation';

// Router

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <Routes />
      </NavigationNativeContainer>
    </Provider>
  );
};

export default App;
