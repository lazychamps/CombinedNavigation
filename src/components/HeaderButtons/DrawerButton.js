import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerButton = navigation => (
  <Icon.Button
    name="menu"
    size={30}
    color="#000"
    backgroundColor="#fff"
    onPress={() => {
      console.log('Trying to open drawer');
      navigation.openDrawer();
    }}
  />
);

export default DrawerButton;
