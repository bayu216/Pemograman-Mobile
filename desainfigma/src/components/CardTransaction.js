import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardTransaction = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/icon/compare.png')}
        style={{marginLeft: 10}}
      />
      <View style={{marginLeft: -15}}>
        <Text style={styles.text}>Rp. 80.000</Text>
        <Text style={styles.text}>Transfer to 081212508538</Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          fontFamily: 'roboto',
          color: '#000000',
        }}>
        11/11/2021
      </Text>
    </View>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 15,
    color: '#000000',
    marginLeft: 20,
    marginBottom: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 5,
    elevation: 5,
  },
});
