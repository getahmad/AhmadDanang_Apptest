import axios from 'axios';

export const getContactAction = () => dispatch => {
  axios
    .get(`https://simple-contact-crud.herokuapp.com/contact`)
    .then(res => {
      //   console.log(res.data.data);
      dispatch({type: 'SET_CONTACT', value: res.data.data});
    })
    .catch(err => {
      console.log('err', err);
    });
};

export const addContactAction = (form, navigation) => dispatch => {
  axios
    .post('https://simple-contact-crud.herokuapp.com/contact', form)
    .then(res => {
      navigation.replace('Home');
      console.log(res);
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const updateContactAction = (contact, form, navigation) => dispatch => {
  axios
    .put(
      `https://simple-contact-crud.herokuapp.com/contact/${contact.id}`,
      form,
    )
    .then(response => {
      console.log(response.data);
      navigation.replace('Home');
    })
    .catch(error => {
      console.log(error.response);
    });
};

export const deleteContactAction =
  (contact, setMessage, navigation) => dispatch => {
    axios
      .delete(`https://simple-contact-crud.herokuapp.com/contact/${contact.id}`)
      .then(response => {
        navigation.replace('Home');
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };
