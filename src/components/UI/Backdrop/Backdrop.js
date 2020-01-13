import React from 'react';
import classes from './Backdrop.module.css';

/**
 * Black transparent screen that will show when a modal is popped up
 */
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
