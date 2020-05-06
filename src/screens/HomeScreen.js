import React from 'react';
import {View, Text, Button} from 'react-native';
import Background from '../components/Background';

const HomeScreen = ({navigation}) => {
  return (
    <Background>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Background>
  );
};

export default HomeScreen;
