//Core
import React, { Component } from 'react';

//CSS
import classes from './socialMedia.css'

class SocialMedia extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.socialMedia}>
        <h1>Social Media</h1>
      </div>
    );
  }
}

export default SocialMedia;