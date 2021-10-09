const initStateContact = {
  contact: [],
};

export const contactReducer = (state = initStateContact, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      contact: action.value,
    };
  }
  return state;
};

const initStateAddContact = {
  firstName: '',
  lastName: '',
  age: '',
  photo: '',
};

export const registerReducer = (state = initStateAddContact, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      firstName: action.value.firstName,
      lastName: action.value.lastName,
      age: action.value.age,
      photo: action.value.photo,
    };
  }

  return state;
};
