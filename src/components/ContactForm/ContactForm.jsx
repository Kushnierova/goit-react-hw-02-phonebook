import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = nanoid();

      handleNameChange = e => {
      this.setState({ name: e.currentTarget.value });
    };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.name}>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleNameChange}
            className={css.input}
            id={this.nameInputId}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
