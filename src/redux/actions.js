import { nanoid } from 'nanoid';

// Action Types
export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

// Action Creators
export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});
