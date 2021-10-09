import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import {ICArrowRight} from '../../../Assets';

const ItemListContact = ({firstName, lastName, image, age, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemList} onPress={onPress}>
      {image.length > 5 ? (
        <UserAvatar size={50} src={`${image}`} />
      ) : (
        <UserAvatar size={50} name={`${firstName} ${lastName}`} />
      )}
      <View style={styles.text}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.age}>{age} yo</Text>
      </View>
      <ICArrowRight />
    </TouchableOpacity>
  );
};

export default ItemListContact;

const styles = StyleSheet.create({
  itemList: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginTop: 15,
    borderBottomColor: '#E8F0F2',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#404040',
  },
});
