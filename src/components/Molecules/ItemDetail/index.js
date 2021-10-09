import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemDetail = ({label, value}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  item: {
    width: '50%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#404040',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#404040',
  },
});
