import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li className={css.contactListItem}>
      <div className={css.contactAlign}>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
