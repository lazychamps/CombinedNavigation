import React from 'react';
import {View, Text, Button} from 'react-native';
import Background from '../components/Background';

const DetailsScreen = ({navigation}) => {
  return (
    <Background>
      <Text>Details Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </Background>
  );
};

export default DetailsScreen;
