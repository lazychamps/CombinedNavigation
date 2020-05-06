import React from 'react';
import {View, Text, Button} from 'react-native';
import Background from '../components/Background';

const SettingsScreen = ({navigation}) => {
  return (
    <Background>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Background>
  );
};

export default SettingsScreen;
