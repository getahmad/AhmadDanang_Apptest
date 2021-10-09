import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} {...restProps} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    color: '#404040',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7C9D9',
    borderRadius: 8,
    marginTop: 6,
    padding: 10,
    height: 40,
    fontSize: 14,
  },
});
