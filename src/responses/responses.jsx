import React from 'react';
import propTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './responses.css';

export const Responses = ({ response }) => (
  <div className={styles.display}>
    <h1>Response</h1>
    <ReactJson src={response} theme="apathy" />
  </div>
);

Responses.propType = {
  response: propTypes.object.isRequired
};
