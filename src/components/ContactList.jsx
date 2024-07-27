import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { getContacts, getFilter, getIsLoading, getError } from '../redux/selectors';
import { deleteContact } from '../redux/slices/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} deleteContact={() => dispatch(deleteContact(contact.id))} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
