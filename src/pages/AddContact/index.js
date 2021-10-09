import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {addContactAction} from '../../Redux/action/contactAction';
import {useForm} from '../../Utils';

const AddContact = ({navigation}) => {
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    age: '',
    photo: 'https://picsum.photos/200',
  });

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(addContactAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        type="back"
        title="Add New Contact"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.input}>
        <TextInput
          label="FirstName"
          placeholder="Type full name"
          value={form.firstName}
          onChangeText={value => setForm('firstName', value)}
        />
        <Gap height={10} />
        <TextInput
          label="LastName"
          placeholder="Type last name"
          value={form.lastName}
          onChangeText={value => setForm('lastName', value)}
        />
        <Gap height={10} />
        <TextInput
          label="Age"
          placeholder="Type age"
          value={form.age}
          keyboardType="numeric"
          onChangeText={value => setForm('age', value)}
        />
        <Gap height={30} />
        <Button title="Save" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#E8F0F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 2,
  },
  profile: {
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
});
