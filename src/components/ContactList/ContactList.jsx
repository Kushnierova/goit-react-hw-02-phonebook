import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={css.item}>
        <p className={css.contacts}>
          <span className={css.names}>{name}</span> : {number}
        </p>
      </li>
    ))}
  </ul>
);
export default ContactList;
