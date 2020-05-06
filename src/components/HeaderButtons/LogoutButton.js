import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LogoutButton = setUserLoggedOut => (
  <Icon.Button
    name="logout-variant"
    size={25}
    color="#000"
    backgroundColor="#fff"
    onPress={() => {
      console.log('Logging user out');
      setUserLoggedOut();
    }}
  />
);

export default LogoutButton;
