//Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Wrapper from '../../components/wrapper/wrapper';

//CSS
import classes from './home.css'

//Assets
import codeImg from '../../assets/code.jpg';
import pencilsImg from '../../assets/pencils.jpg';

class Home extends Component {
  state = {
    showIcons: false
  }

  componentDidMount() {
    window.scroll(0,0);
    setTimeout(() => {
      this.setState({...this.state, showIcons: true});
    }, 500);
  }

  render() {
    let leftClasses = [classes.leftIcon, classes.hiddenLeft];
    let rightClasses = [classes.rightIcon, classes.hiddenRight];
    if(this.state.showIcons) {
      leftClasses = [classes.leftIcon];
      rightClasses = [classes.rightIcon];
    }
    return (
      <Wrapper>
        <div className={classes.banner}>
          <div className={classes.box} style={{backgroundImage: `url(${codeImg})`}}>
            <div className={classes.content} style={{color: 'white', borderColor: 'white'}}>
              <h2>Developer</h2>
              <NavLink to='/development'>Read More</NavLink>
            </div>
          </div>
          <div className={classes.box} style={{backgroundImage: `url(${pencilsImg})`}}>
          <div className={classes.content} style={{borderColor: '#c2457d'}}>
              <h2>Designer</h2>
              <NavLink to='/design'>Read More</NavLink>
            </div>
          </div>
          <p className={leftClasses.join(' ')}><i className="fas fa-hand-point-down"></i></p>
          <p className={rightClasses.join(' ')}><i className="fas fa-hand-point-down"></i></p>
        </div>
        <div className={classes.statement}>
          <h4>Temple Design Solutions offers full stack development services, social media management services, web design, and graphic design.</h4>
        </div>
        <div className={classes.services}>
          <div className={classes.card}>
            <p className={classes.icon}><i className="fas fa-code"></i></p>
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, augue nec bibendum cursus, dui orci 
              imperdiet quam, ac rhoncus ex nunc ut felis. Vivamus pellentesque massa vitae dolor molestie, non 
              consectetur tortor rutrum.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.icon}><i className="fas fa-users"></i></p>
            <h3>Social Media</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, augue nec bibendum cursus, dui orci 
              imperdiet quam, ac rhoncus ex nunc ut felis. Vivamus pellentesque massa vitae dolor molestie, non 
              consectetur tortor rutrum.
            </p>
          </div>
          <div className={classes.card}>
            <p className={classes.icon}><i className="fas fa-paint-brush"></i></p>
            <h3>Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, augue nec bibendum cursus, dui orci 
              imperdiet quam, ac rhoncus ex nunc ut felis. Vivamus pellentesque massa vitae dolor molestie, non 
              consectetur tortor rutrum.
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Home;