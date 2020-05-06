import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ConnectedDetailsScreen,
  ConnectedSettingsScreen,
} from './ConnectedComponents';
import HomeStackScreens from './HomeStackScreens';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="HomeStack"
      component={HomeStackScreens}
      options={{title: 'Home'}}
    />
    <Drawer.Screen name="Details" component={ConnectedDetailsScreen} />
    <Drawer.Screen name="Settings" component={ConnectedSettingsScreen} />
  </Drawer.Navigator>
);

export default DrawerScreens;
