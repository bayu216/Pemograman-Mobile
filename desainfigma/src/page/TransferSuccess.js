import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const TransferSuccess = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center', marginTop: 70, marginBottom: 18}}>
        <Image source={require('../assets/img/transfer.png')} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
            marginBottom: 20,
            marginTop: 40,
          }}>
          Transfer Success!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
          }}>
          Rp. 100,000
        </Text>
      </View>
      <View style={{width: '80%', alignSelf: 'center', marginTop: 20}}>
        <View style={{backgroundColor: '#4982C1'}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 14,
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
              marginTop: 17,
            }}>
            Receiver : R. Rogers Dwi Putra{' '}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 12,
              marginBottom: 15,
            }}>
            082240206xxx
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
              fontWeight: '600',
              textAlign: 'center',
            }}>
            FINISH
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferSuccess;

const styles = StyleSheet.create({});
