import React from 'react';
import classes from './Logo.module.css';
import StoreLogo from '../../assets/images/store-logo.jpg';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={StoreLogo} alt="MyStore" />
  </div>
);

export default logo;
