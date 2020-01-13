import React from 'react';
import classes from './Spinner.module.css';

/**
 * Component that shows a spinner for time waiting processes
 */
const spinner = () => (
  <div className={classes.Loader}>Loading...</div>
);

export default spinner;
