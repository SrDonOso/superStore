import React from 'react';
import classes from './Logo.module.css';
import StoreLogo from '../../assets/images/store-logo.jpg';

/**
 * component that will show the logo for the app
 */
const logo = () => (
  <div className={classes.Logo}>
    <img src={StoreLogo} alt="MyStore" />
  </div>
);

export default logo;
