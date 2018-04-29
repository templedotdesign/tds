//Core
import React, { Component } from 'react';

//CSS
import classes from './design.css'

class Design extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.design}>
        <h1>Design</h1>
      </div>
    );
  }
}

export default Design;