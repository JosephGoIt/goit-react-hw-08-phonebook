import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Section from '../components/Section';
import { store } from '../redux/store';
import { fetchContacts } from '../redux/slices/contactsSlice';

export const AppsOrig = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </Provider>
  );
};
