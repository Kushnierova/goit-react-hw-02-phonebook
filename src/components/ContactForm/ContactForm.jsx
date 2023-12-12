import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <form className={css.form}>
        <label className={css.name}>
          Name <input />
        </label>
        <button className={css.btn}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
