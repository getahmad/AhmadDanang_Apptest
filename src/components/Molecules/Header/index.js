import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowLeft, ICLogo} from '../../../Assets';

const Header = ({title, type, onPress}) => {
  return (
    <View style={styles.header(type)}>
      {type === 'back' ? (
        <TouchableOpacity style={styles.back} onPress={onPress}>
          <ICArrowLeft />
        </TouchableOpacity>
      ) : (
        <ICLogo width={62} height={62} />
      )}
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: type => ({
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    justifyContent: type === 'back' ? 'flex-start' : 'center',
  }),
  title: type => ({
    flex: type === 'back' ? 1 : 0,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#404040',
    marginLeft: 20,
    textAlign: 'center',
  }),
  back: {
    padding: 10,
    margin: -10,
  },
});
