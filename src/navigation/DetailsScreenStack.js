import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderOptions from './HeaderOptions';
import DetailsScreen from '../screens/DetailsScreen';

const DetailsStack = createStackNavigator();
export const DetailsScreenStack = ({navigation, setUserLoggedOut}) => (
  <DetailsStack.Navigator>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={HeaderOptions(navigation, setUserLoggedOut)}
    />
  </DetailsStack.Navigator>
);
