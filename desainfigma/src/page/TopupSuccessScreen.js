import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const TopupSuccessScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 77,
      }}>
      <Image source={require('../assets/img/topup.png')} />
      <View style={{marginTop: 44, marginBottom: 24}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
            marginBottom: 23,
          }}>
          Top Up Complete
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
          }}>
          Rp. 60,000
        </Text>
      </View>
      <View style={{width: '70%'}}>
        <View style={{backgroundColor: '#4982C1', paddingVertical: 20}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            20 August 2020
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            VA Mandiri
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            backgroundColor: '#4982C1',
            paddingVertical: 8,
            marginTop: 26,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {' '}
            FINISH
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopupSuccessScreen;

const styles = StyleSheet.create({});
