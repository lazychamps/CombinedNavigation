import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import RequestRideScreen from '../screens/RequestRideScreen';
import ShareRideScreen from '../screens/ShareRideScreen';

const Tab = createMaterialBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ShareRide" component={ShareRideScreen} />
      <Tab.Screen name="RequestRide" component={RequestRideScreen} />
    </Tab.Navigator>
  );
};

export default TabScreens;
