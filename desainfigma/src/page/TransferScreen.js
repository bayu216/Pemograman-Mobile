import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const TransferScreen = ({navigation}) => {
  const [receiveno, setReceiveno] = useState();
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
            placeholder="Receiver Phone Number"
            value={receiveno}
            onChangeText={() => setReceiveno()}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransferConfirm')}
          style={{
            backgroundColor: '#4982C1',
            paddingVertical: 8,
            marginTop: 30,
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
            CHECK NUMBER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({});
