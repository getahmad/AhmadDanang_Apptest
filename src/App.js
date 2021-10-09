import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import store from './Redux/store';
import Router from './Router';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
