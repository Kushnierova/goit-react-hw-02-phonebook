import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.items}>
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
          🗑
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
