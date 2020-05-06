import React, {useState, useEffect} from 'react';
import DrawerScreens from './DrawerSceens';
import AuthStackScreens from './AuthStackScreens';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

const CombinedNavigator = ({token}) => {
  const [isLoading, setLoading] = useState(true);
  const [localToken, setToken] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('TOKEN')
      .then(token => {
        setToken(token);
        setLoading(false);
      })
      .catch(err => {
        setToken(null);
        setLoading(false);
      });
  }, [token]);

  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  ) : localToken ? (
    <DrawerScreens />
  ) : (
    <AuthStackScreens />
  );
};

const mapStateToProps = state => {
  return {
    token: state.userReducer.token,
  };
};

export default connect(mapStateToProps)(CombinedNavigator);
