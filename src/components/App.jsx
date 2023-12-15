import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

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
    filter: '',
  };

  addContact = (name, number) => {
    if (this.checkName(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  checkName = name => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name}is already in contacts`);
      return false;
    }
    return true;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.container}>
        <div className={css.phonebook}>
          <h1 className={css.titlePhonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
