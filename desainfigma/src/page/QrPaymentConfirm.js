import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const QrPaymentConfirm = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center', marginTop: 40, marginBottom: 11}}>
        <Image source={require('../assets/img/qrconfirm.png')} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#333333',
          }}>
          Rp. 60.000
        </Text>
      </View>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <View
          style={{
            borderBottomColor: '#B2B2B2',
            borderBottomWidth: 1,
            marginBottom: 21,
            marginTop: 4,
          }}
        />
        <View style={{backgroundColor: '#4982C1', borderRadius: 5}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'roboto',
              fontWeight: '300',
              textAlign: 'center',
              marginTop: 19,
            }}>
            Payment To :
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 24,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 11,
            }}>
            Basicschool
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontFamily: 'roboto',
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 29,
            }}>
            Jl. Ciparay No 20B, Kota Bandung
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentSuccess')}
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
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QrPaymentConfirm;

const styles = StyleSheet.create({});
