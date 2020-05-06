import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderOptions from './HeaderOptions';
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator();

export const SettingsScreenStack = ({navigation, setUserLoggedOut}) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={HeaderOptions(navigation, setUserLoggedOut)}
    />
  </SettingsStack.Navigator>
);
