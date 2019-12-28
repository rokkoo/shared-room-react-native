import React from 'react';
import {SafeAreaView, Dimensions, ScrollView, Text} from 'react-native';
import {Provider} from 'react-redux';

// Store
import store from './src/store';

// Components
import HoseList from './src/components/houseList';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{display: 'flex', height: height, paddingBottom: 15}}>
        <ScrollView>
          <Text style={{color: '#6c5ce7', fontSize: 27, paddingLeft: 10}}>
            Shared room
          </Text>
          <HoseList />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
