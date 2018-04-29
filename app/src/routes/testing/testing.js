//Core
import React, { Component } from 'react';

import PopNav from '../../components/popNav/popNav';

class Testing extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <PopNav/>
    );
  }
}

export default Testing;