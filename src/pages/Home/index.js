import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICAddContact} from '../../Assets';
import {Header, ItemListContact} from '../../components';
import {getContactAction} from '../../Redux/action/contactAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contactReducer.contact);

  useEffect(() => {
    dispatch(getContactAction());
  }, [dispatch]);

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Contact Service" />
        {contact.map(contact => {
          return (
            <ItemListContact
              key={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              age={contact.age}
              image={contact.photo}
              onPress={() => navigation.navigate('DetailContact', contact)}
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.addContact}
        onPress={() => navigation.navigate('AddContact')}>
        <ICAddContact />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  addContact: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
