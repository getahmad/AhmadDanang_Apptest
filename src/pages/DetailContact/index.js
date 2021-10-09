import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import UserAvatar from 'react-native-user-avatar';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, ItemDetail} from '../../components';
import {deleteContactAction} from '../../Redux/action/contactAction';

const DetailContact = ({navigation, route}) => {
  const contact = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContactAction(contact, setMessage, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        type="back"
        title="Detail Contact"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.profile}>
        <View style={styles.image}>
          {contact.photo.length > 5 ? (
            <UserAvatar size={100} src={contact.photo} />
          ) : (
            <UserAvatar
              size={100}
              name={`${contact.firstName} ${contact.lastName}`}
            />
          )}
        </View>
      </View>
      <View style={styles.detailInfo}>
        <View style={styles.row}>
          <ItemDetail label="FirstName" value={contact.firstName} />
          <ItemDetail label="LastName" value={contact.lastName} />
        </View>
        <ItemDetail label="Age" value={`${contact.age} Years Old`} />
      </View>
      <View style={styles.btn}>
        <Button
          title="Update"
          onPress={() => navigation.navigate('UpdateContact', contact)}
        />
        <Gap height={15} />
        <Button
          title="Delete"
          color="white"
          textColor="#39A2DB"
          onPress={toggleModal}
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure for delete this contact?
            </Text>
            <View style={styles.modalRow}>
              <Button title="Yes" onPress={onDelete} />
              <Gap width={20} />
              <Button
                title="No"
                color="white"
                textColor="#39A2DB"
                onPress={toggleModal}
              />
            </View>
            <Text style={{color: 'red'}}>{message}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailContact;

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
  detailInfo: {
    paddingHorizontal: 30,
    marginTop: 15,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  btn: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  modal: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#E8F0F2',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    margin: -20,
    height: 300,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
    marginTop: 20,
  },
  modalRow: {
    flexDirection: 'row',
  },
});
