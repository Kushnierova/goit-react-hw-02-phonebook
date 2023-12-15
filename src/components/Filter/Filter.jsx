import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      <input
        type="text"
        placeholder="Find contact by name:"
        value={value}
        className={css.filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
