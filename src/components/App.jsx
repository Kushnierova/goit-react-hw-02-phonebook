import { Component } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.phonebook}>
          <h1 className={css.titlePhonebook}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.titleContacts}>Contacts</h2>
          {/* <Filter ... /> */}
          {/* <ContactList ... /> */}
        </div>
      </div>
    );
  }
}
