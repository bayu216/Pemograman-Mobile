import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const TransferConfirm = ({navigation}) => {
  const [nominaltf, setNominaltf] = useState();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{marginHorizontal: 40}}>
        <View
          style={{alignContent: 'center', alignItems: 'center', marginTop: 70}}>
          <Image source={require('../assets/img/transfer.png')} />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#C3C3C3',
            borderRadius: 5,
            marginTop: 35,
          }}>
          <TextInput
            style={{fontFamily: 'roboto'}}
            underlineColor="transparent"
            placeholder="Nominal Transfer"
            value={nominaltf}
            onChangeText={() => setNominaltf()}
          />
        </View>
        <View style={{marginVertical: 25}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#000000',
              fontSize: 16,
              fontFamily: 'roboto',
              fontWeight: '700',
              marginBottom: 21,
            }}>
            Receiver :
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#000000',
              fontSize: 16,
              fontFamily: 'roboto',
              fontWeight: '400',
            }}>
            R. Rogers Dwi Putra
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransferSuccess')}
          style={{
            backgroundColor: '#4982C1',
            paddingVertical: 8,
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
            TRANSFER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferConfirm;

const styles = StyleSheet.create({});
