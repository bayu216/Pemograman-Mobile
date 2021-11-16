import React from 'react';
import CardTransaction from '../components/CardTransaction';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    // display saldo
    <View>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: 35,
          paddingBottom: 3,
          borderBottomLeftRadius: 9,
          borderBottomRightRadius: 9,
          paddingHorizontal: 30,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#484848',
            fontFamily: 'roboto',
          }}>
          Your Balance :
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: '600',
            color: '#484848',
            fontFamily: 'roboto',
          }}>
          Rp. 1.255.555.555
        </Text>
      </View>
      {/* button menu */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          paddingVertical: 20,
          backgroundColor: '#4982C1',
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TopupScreen')}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/icon/add.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'roboto',
                color: '#FFFFFF',
                textAlign: 'center',
                marginTop: 5,
              }}>
              Top Up
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('QrScreen')}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/icon/qr.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'roboto',
                color: '#FFFFFF',
                textAlign: 'center',
                marginTop: 5,
              }}>
              QR Pay
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransferScreen')}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/icon/tf.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'roboto',
                color: '#FFFFFF',
                textAlign: 'center',
                marginTop: 5,
              }}>
              Transfer
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 35,
          fontSize: 15,
          fontWeight: '400',
          fontFamily: 'roboto',
          color: '#000000',
          marginBottom: 10,
        }}>
        5 Latest Transaction
      </Text>
      {/* card */}
      <ScrollView style={{height: '48%'}}>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
