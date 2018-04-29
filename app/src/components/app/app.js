//Core
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Home from '../../routes/home/home';
import About from '../../routes/about/about';
import Work from '../../routes/work/work';
import Contact from '../../routes/contact/contact';
import Development from '../../routes/development/development';
import SocialMedia from '../../routes/socialMedia/socialMedia';
import Design from '../../routes/design/design';
import Layout from '../layout/layout';
// import Testing from '../../routes/testing/testing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/testing' component={Testing}/> */}
          <Layout>  
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/work' component={Work}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/development' component={Development}/>
            <Route exact path='/design' component={Design}/>
            <Route exact path='/social-media' component={SocialMedia}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
