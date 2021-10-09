import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, color = '#39A2DB', textColor = '#FFFFFF'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container(color)}
      activeOpacity={0.7}>
      <Text style={styles.title(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#39A2DB',
  }),
  title: textColor => ({
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: textColor,
  }),
});
