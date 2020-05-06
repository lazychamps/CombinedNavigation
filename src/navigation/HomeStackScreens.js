import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {connect} from 'react-redux';
import {setUserLoggedOut} from '../redux/actions/userAction';
import HeaderOptions from './HeaderOptions';
import TabScreens from './TabScreens';

const HomeStack = createStackNavigator();

const HomeStackScreens = ({navigation, setUserLoggedOut}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={TabScreens}
      options={HeaderOptions(navigation, setUserLoggedOut)}
    />
    <HomeStack.Screen
      name="Details"
      component={DetailsScreen}
      options={HeaderOptions(navigation, setUserLoggedOut)}
    />
    <HomeStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={HeaderOptions(navigation, setUserLoggedOut)}
    />
  </HomeStack.Navigator>
);

const mapDispatchToProps = {
  setUserLoggedOut,
};

export default connect(undefined, mapDispatchToProps)(HomeStackScreens);
