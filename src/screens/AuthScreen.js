import React, {memo} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import {StyleSheet} from 'react-native';
import {Button, Text, View} from 'native-base';

const AuthScreen = ({navigation}) => (
  <Background>
    <Logo />
    <Header>QA COMMUTE</Header>

    <View style={styles.buttonContainer}>
      <Button block onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Login</Text>
      </Button>
    </View>
    <View style={styles.buttonContainer}>
      <Button block onPress={() => navigation.navigate('RegisterScreen')}>
        <Text>Sign up</Text>
      </Button>
    </View>
  </Background>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    margin: 10,
  },
});

export default memo(AuthScreen);
