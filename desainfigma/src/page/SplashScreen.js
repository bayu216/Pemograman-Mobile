import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  });
  return (
    <View style={{flex: 1, backgroundColor: '#005690', alignItems: 'center'}}>
      <Image
        source={require('../assets/img/react1.png')}
        style={{marginTop: 85, width: 175, height: 150}}
      />
      <Text
        style={{
          marginTop: 52,
          color: 'white',
          fontSize: 36,
          fontWeight: '300',
        }}>
        E-Wallet Apps
      </Text>
      <Text
        style={{
          marginTop: 52,
          color: 'white',
          fontSize: 36,
          fontWeight: '300',
          width: 238,
          textAlign: 'center',
        }}>
        Final Project React Native
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
