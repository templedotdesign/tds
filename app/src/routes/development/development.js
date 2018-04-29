//Core
import React, { Component } from 'react';

//CSS
import classes from './development.css'

class Development extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.development}>
        <h1>Development</h1>
      </div>
    );
  }
}

export default Development;