import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CombinedNavigator from './src/navigation/CombinedNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CombinedNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
