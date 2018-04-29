//Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import classes from './popNav.css';

class PopNav extends Component {
  state = {
    showMenu: false,
    showCurrentLink: false,
    currentLink: ''
  }

  toggleMenu = () => {
    this.setState({...this.state, showMenu: !this.state.showMenu})
  }

  hideMenu = () => {
    this.setState({...this.state, showMenu: false})
  }

  showCurrentLink = (event, linkName) => {
    this.setState({ ...this.state, showCurrentLink: true, currentLink: linkName});
  }

  hideCurrentLink = () => {
    this.setState({ ...this.state, showCurrentLink: false, currentLink: ''});
  }


  render() {
  let navClasses = [classes.navIcon, classes.hidden]
  if(this.state.showMenu) {
    navClasses = [classes.navIcon];
  }

  let currentLink = [classes.currentLink, classes.invisible];
  if(this.state.showCurrentLink) {
    currentLink = [classes.currentLink];
  }
  return (
    <div className={classes.popNav}>
      <NavLink to='/' className={classes.brand} onCLick={this.hideMenu}>
        <h2 style={{color: 'white'}}>Temple</h2>
        <h2 style={{color: '#c2457d'}}>Design</h2>
        <h2 style={{color: 'white'}}>Solutions</h2>
      </NavLink>
      <div>
        <h1 className={currentLink.join(' ')}>{this.state.currentLink}</h1>
      </div>
      <div className={classes.navIcons}>
        <NavLink to='/development' className={navClasses.join(' ')} onMouseOver={(event) => {this.showCurrentLink(event, 'Development')}} onMouseLeave={this.hideCurrentLink} onClick={this.toggleMenu}><i className="fas fa-code"></i></NavLink>
        <NavLink to='/social-media' className={navClasses.join(' ')} onMouseOver={(event) => {this.showCurrentLink(event, 'Social Media')}} onMouseLeave={this.hideCurrentLink} onClick={this.toggleMenu}><i className="fas fa-users"></i></NavLink>
        <NavLink to='/design' className={navClasses.join(' ')} onMouseOver={(event) => {this.showCurrentLink(event, 'Design')}} onMouseLeave={this.hideCurrentLink} onClick={this.toggleMenu}><i className="fas fa-paint-brush"></i></NavLink>
        <NavLink to='/about' className={navClasses.join(' ')} onMouseOver={(event) => {this.showCurrentLink(event, 'About')}} onMouseLeave={this.hideCurrentLink} onClick={this.toggleMenu}><i className="fas fa-info"></i></NavLink>
        <NavLink to='/contact' className={navClasses.join(' ')} onMouseOver={(event) => {this.showCurrentLink(event, 'Contact')}} onMouseLeave={this.hideCurrentLink} onClick={this.toggleMenu}><i className="far fa-envelope"></i></NavLink>
        <p className={classes.menuButton} onClick={this.toggleMenu}><i className="fas fa-bars"></i></p>
      </div>
    </div>
  );
  }
};

export default PopNav;