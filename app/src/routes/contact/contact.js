//Core
import React, { Component } from 'react';

//Components
import ContactForm from '../../components/forms/contactForm';

//CSS
import classes from './contact.css'

class Contact extends Component {
  state = {
    text: '',
    hiddenText: true
  }
  componentDidMount() {
    window.scroll(0,0);
  }

  updateText = (event, text) => {
    this.setState({...this.state, text: text, hiddenText: !this.state.hiddenText});
  }

  render() {
    let textClasses = [classes.flavorText];
    if(this.state.hiddenText) {
      textClasses.push(classes.hidden);
    }
    return (
      <div className={classes.contact}>
        <div className={classes.cardsWrapper}>
          <a href='tel:1-614-398-9960'className={classes.contactCard} onMouseEnter={(event) => {this.updateText(event, 'Text Or Call 614-398-9960')}} onMouseLeave={(event) => {this.updateText(event, 'Text Or Call 614-398-9960')}}><i className="fas fa-mobile"></i></a>
          <a href='mailto:temple@templedesignsolutions.com'className={classes.contactCard} onMouseEnter={(event) => {this.updateText(event, 'Send Us An Email')}} onMouseLeave={(event) => {this.updateText(event, 'Send Us An Email')}}><i className="far fa-envelope"></i></a>
          <a href='https://www.facebook.com/ryantemple31' target='_blank' rel='noopener noreferrer' className={classes.contactCard} onMouseEnter={(event) => {this.updateText(event, 'Lets Be Friends')}} onMouseLeave={(event) => {this.updateText(event, 'Lets Be Friends')}}><i className="fab fa-facebook-f"></i></a>
          <a href='https://twitter.com/templedotdesign' target='_blank' rel='noopener noreferrer' className={classes.contactCard} onMouseEnter={(event) => {this.updateText(event, 'A Little Birdie Told Me')}} onMouseLeave={(event) => {this.updateText(event, 'A Little Birdie Told Me')}}><i className="fab fa-twitter"></i></a>
        </div>
        <p className={textClasses.join(' ')}>{this.state.text}</p>
        <ContactForm/>
      </div>
    );
  }
}

export default Contact;