import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const QrScreen = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('QrPaymentConfirm')}
      style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          backgroundColor: '#C4C4C4',
          padding: 150,
          marginTop: 105,
          marginHorizontal: 20,
        }}>
        <Image source={require('../assets/icon/camera.png')} />
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('QrPaymentConfirm')}
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
          CONFIRM
        </Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
};

export default QrScreen;

const styles = StyleSheet.create({});
