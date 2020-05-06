import React from 'react';
import {View, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button title="Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SignUpScreen;
