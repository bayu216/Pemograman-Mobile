import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [nohp, setNohp] = useState();
  return (
    <ScrollView>
      <View style={{marginTop: 50, paddingHorizontal: 30}}>
        <View
          style={{
            marginTop: 31,
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
            marginTop: 31,
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
        <View
          style={{
            marginTop: 31,
            borderWidth: 2,
            borderColor: '#C3C3C3',
            borderRadius: 5,
          }}>
          <TextInput
            style={{fontFamily: 'roboto'}}
            underlineColor="transparent"
            placeholder="Name"
            value={name}
            onChangeText={() => setName()}
          />
        </View>
        <View
          style={{
            marginTop: 31,
            borderWidth: 2,
            borderColor: '#C3C3C3',
            borderRadius: 5,
          }}>
          <TextInput
            style={{fontFamily: 'roboto'}}
            underlineColor="transparent"
            placeholder="No Handphone"
            value={nohp}
            onChangeText={() => setNohp()}
          />
        </View>
        {/* <View style={{ marginTop: 31, borderRadius: 100 }}>
          <Button onPress={() => navigation.navigate('HomeScreen')} title="SUBMIT" color="#4982C1" style={{ fontWeight: '600', fontFamily: 'roboto', color: 'white', fontSize: 18 }} />
        </View> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Tab')}
          style={{backgroundColor: '#4982C1', marginTop: 31, borderRadius: 5}}>
          <Text
            style={{
              fontWeight: '600',
              fontFamily: 'roboto',
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
