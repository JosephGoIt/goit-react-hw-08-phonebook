import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Section from '../components/Section';
import { store } from '../redux/store';
import { fetchContacts } from '../redux/contacts/contactsSlice';

export const Contacts = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
  );
};
