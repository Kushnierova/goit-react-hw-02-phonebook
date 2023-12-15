import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.contacts}>
          <span className={css.names}>{name}</span> : {number}
        </p>

        <button
          type="button"
          className={css.btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
