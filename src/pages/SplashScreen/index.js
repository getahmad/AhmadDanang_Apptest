import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../Assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 800);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ICLogo />
      <Text style={styles.title}>Contact Service</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#39A2DB',
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
});
