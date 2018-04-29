//Core
import React from 'react';

//Components
import Footer from '../footer/footer';
import Wrapper from '../wrapper/wrapper';
import PopNav from '../popNav/popNav';

const layout = (props) => {
  return (
    <Wrapper>
      <PopNav/>
      {props.children}
      <Footer/>
    </Wrapper>
  );
};

export default layout;