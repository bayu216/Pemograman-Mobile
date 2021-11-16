import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import CardTransaction from '../components/CardTransaction';

const HistoryScreen = () => {
  return (
    <ScrollView>
      {/* card */}
      <View style={{paddingBottom: 20}}>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
