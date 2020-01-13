import React from 'react';
import classes from './DrawerToggle.module.css';

/**
 * component that will display a 3 line toggle button
 */
const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
