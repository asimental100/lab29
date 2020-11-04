import React from 'react';
import propTypes from 'prop-types';
import styles from './search.css'

export const Search = ({ onChange, onClick }) => (
    <div className={styles.mainDiv}>
      <div className={styles.search}>
        <label htmlFor="url"><h1>Search</h1></label>
        <input type="text" name="url" onChange={onChange} placeholder="Search" />
      </div>
      <div>
        <label htmlFor="method"><h1>Methods</h1></label>
        <ul className={styles.methodsList}>
          <li>GET<input type="radio" name="method" value="GET" onChange={onChange} /></li>
          <li>POST<input type="radio" name="method" value="POST" onChange={onChange} /></li>
          <li>PUT<input type="radio" name="method" value="PUT" onChange={onChange} /></li>
          <li>PATCH<input type="radio" name="method" value="PATCH" onChange={onChange} /></li>
          <li>DELETE<input type="radio" name="method" value="DELETE" onChange={onChange} /></li>
        </ul>
      </div>
      <div className={styles.json}>
        <label htmlFor="json"><h3>JSON (POST/PUT)</h3></label>
        <input type="text" name="json" placeholder="JSON" onChange={onChange} />
      </div>
      <button onClick={onClick}>Send!</button>
    </div>
);

Search.propType = {
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired
};
