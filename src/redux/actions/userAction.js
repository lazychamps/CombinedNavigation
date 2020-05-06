import {USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS} from '../actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

export const setUserLoggedIn = () => {
  return dispatch => {
    return AsyncStorage.setItem('TOKEN', 'randomToken').then(res => {
      AsyncStorage.getItem('TOKEN').then(console.log);
      dispatch({type: USER_LOGIN_SUCCESS, payload: 'randomToken'});
    });
  };
};

export const setUserLoggedOut = () => {
  console.log('Logging Out');
  return dispatch => {
    return AsyncStorage.removeItem('TOKEN').then(res => {
      dispatch({type: USER_LOGOUT_SUCCESS, payload: 'invalid'});
    });
  };
};
