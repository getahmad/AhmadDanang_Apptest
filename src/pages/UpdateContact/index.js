import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {updateContactAction} from '../../Redux/action/contactAction';
import {useForm} from '../../Utils';

const UpdateContact = ({navigation, route}) => {
  const contact = route.params;

  const [form, setForm] = useForm({
    firstName: contact.firstName,
    lastName: contact.lastName,
    age: contact.age,
    photo: contact.photo,
  });
  const age = form.age.toString();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(updateContactAction(contact, form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        type="back"
        title="Update Contact"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.profile}>
        <View style={styles.image}>
          <UserAvatar size={100} src={form.photo} />
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          label="FirstName"
          value={form.firstName}
          onChangeText={value => setForm('firstName', value)}
        />
        <Gap height={10} />
        <TextInput
          label="LastName"
          value={form.lastName}
          onChangeText={value => setForm('lastName', value)}
        />
        <Gap height={10} />
        <TextInput
          label="Age"
          value={age}
          keyboardType="numeric"
          onChangeText={value => setForm('age', value)}
        />
        <Gap height={30} />
        <Button title="Update" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default UpdateContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
});
