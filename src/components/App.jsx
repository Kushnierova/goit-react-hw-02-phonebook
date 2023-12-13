import { Component } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: '2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: '3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: '4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
  };

  formSubmitHandler = (id, name, number) => {
    if (this.checkName(name)) {
      console.log(id, name, number);
      this.state.contacts.push({ id, name, number });
      this.setState(prevState => ({
        contacts: prevState.contacts,
      }));
    }
  };

  checkName = name => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name}is already in contacts`);
      return false;
    }
    return true;
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <div className={css.phonebook}>
          <h1 className={css.titlePhonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
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
