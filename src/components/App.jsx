import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'Harry Potter',
        number: '459-12-56',
      },
      {
        id: '2',
        name: 'Hermione Granger',
        number: '443-89-12',
      },
      {
        id: '3',
        name: 'Ronald Weasley',
        number: '645-17-79',
      },
      {
        id: '4',
        name: 'Luna Lovegood',
        number: '227-91-26',
      },
    ],
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <div className={css.phonebook}>
          <h1 className={css.titlePhonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.titleContacts}>Contacts</h2>
          {/* <Filter ... /> */}
          <ContactList contacts={contacts} />
        </div>
      </div>
    );
  }
}
