//Core
import React, { Component } from 'react';

//CSS
import classes from './about.css'

//Assets
import bubblesImg from '../../assets/pink-bubbles.png';

class About extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.about}>
        <div style={{background: `url(${bubblesImg})`, margin: '0 auto', width: '500px', height: '600px'}}></div>
        <div style={{background: `url(${bubblesImg})`, margin: '0 auto', width: '500px', height: '600px'}}></div>
        <div style={{background: `url(${bubblesImg})`, margin: '0 auto', width: '500px', height: '600px'}}></div>
      </div>
    );
  }
}

export default About;