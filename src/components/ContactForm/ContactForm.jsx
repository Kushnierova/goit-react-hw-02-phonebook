import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
            className={css.input}
            id={this.nameInputId}
          />
        </label>
        <label className={css.label} htmlFor={this.numberInputId}>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChange}
            className={css.input}
            id={this.numberInputId}
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
