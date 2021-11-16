import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const PaymentSuccess = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center', marginTop: 60, marginBottom: 18}}>
        <Image source={require('../assets/img/qrconfirm.png')} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
            marginBottom: 15,
          }}>
          Payment Complete!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#000000',
          }}>
          Rp. 60.000
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
            {' '}
            Merchant : Basicschool
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
            Jl. Ciparay No 20B, Kota Bandung
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

export default PaymentSuccess;

const styles = StyleSheet.create({});
