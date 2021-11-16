import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      {/* profile */}
      <View
        style={{backgroundColor: '#005690', padding: 30, alignItems: 'center'}}>
        <View
          style={{
            borderRadius: 110,
            width: 110,
            height: 110,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 23,
          }}>
          <Image source={require('../assets/img/user.png')} />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#FFFFFF',
            marginBottom: 10,
          }}>
          Fauzi Bayu Saputra
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            fontFamily: 'roboto',
            color: '#FFFFFF',
          }}>
          081212508538
        </Text>
      </View>
      {/* button edit */}
      <View style={{marginHorizontal: 40}}>
        <TouchableOpacity
          style={{marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5}}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 9,
              fontWeight: '600',
              fontFamily: 'roboto',
              color: 'white',
              fontSize: 18,
            }}>
            CHANGE PROFILE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5}}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 9,
              fontWeight: '600',
              fontFamily: 'roboto',
              color: 'white',
              fontSize: 18,
            }}>
            CHANGE PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5}}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 9,
              fontWeight: '600',
              fontFamily: 'roboto',
              color: 'white',
              fontSize: 18,
            }}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
