//Core
import React, { Component } from 'react';

//CSS
import classes from './work.css'

class Work extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.work}>
        <h1>Work</h1>
      </div>
    );
  }
}

export default Work;