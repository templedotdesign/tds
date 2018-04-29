//Core
import React from 'react';

//CSS
import classes from './textInput.css';

const textInput = (props) => {
  return (
    <div className={classes.textInput}>
      <label>{props.label}</label>
      <input type='text' value={props.value} onChange={props.changed}/>
    </div>
  );
}

export default textInput;