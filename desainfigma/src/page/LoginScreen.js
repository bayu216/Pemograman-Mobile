import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 30}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            marginTop: 70,
            borderRadius: 150,
            width: 150,
            height: 150,
            backgroundColor: '#005690',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/img/react2.png')} />
        </View>
        <Text
          style={{
            marginTop: 30,
            fontSize: 24,
            fontWeight: '500',
            color: '#4982C1',
            fontFamily: 'roboto',
          }}>
          E-Wallet
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 2,
          borderColor: '#C3C3C3',
          borderRadius: 5,
        }}>
        <TextInput
          style={{fontFamily: 'roboto'}}
          underlineColor="transparent"
          placeholder="Email"
          value={email}
          onChangeText={() => setEmail()}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 2,
          borderColor: '#C3C3C3',
          borderRadius: 5,
        }}>
        <TextInput
          style={{fontFamily: 'roboto'}}
          underlineColor="transparent"
          placeholder="Password"
          value={password}
          onChangeText={() => setPassword()}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tab')}
        style={{
          backgroundColor: '#4982C1',
          marginTop: 25,
          paddingVertical: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontFamily: 'roboto',
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text
          style={{
            marginTop: 34,
            alignSelf: 'center',
            fontWeight: '300',
            color: 'black',
            fontFamily: 'roboto',
          }}>
          Registrasi
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
