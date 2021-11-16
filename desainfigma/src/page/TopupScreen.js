import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const TopupScreen = ({navigation}) => {
  const [nominal, setNominal] = useState();
  return (
    <View style={{marginHorizontal: 40}}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Image source={require('../assets/img/topup.png')} />
      </View>
      <View
        style={{
          marginTop: 180,
          borderWidth: 2,
          borderColor: '#C3C3C3',
          borderRadius: 5,
        }}>
        <TextInput
          style={{fontFamily: 'roboto'}}
          underlineColor="transparent"
          placeholder="Nominal Topup"
          value={nominal}
          onChangeText={() => setNominal()}
        />
      </View>
      {/* <View style={{ marginTop: 31 }}>
                <Button onPress={() => navigation.navigate('TopupSuccessScreen')} title="SUBMIT" color="#4982C1" style={{ fontWeight: '600', fontFamily: 'roboto', color: 'white', fontSize: 18 }} />
            </View> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('TopupSuccessScreen')}
        style={{
          backgroundColor: '#4982C1',
          paddingVertical: 8,
          marginTop: 31,
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
  );
};

export default TopupScreen;

const styles = StyleSheet.create({});
