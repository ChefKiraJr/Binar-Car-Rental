import React from 'react';
import './commonLayout.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const CommonLayout = (props) => {
  return (
    <>
      <Header scroller={props.scroller} page={props.page} />
      {props.children}
      <Footer page={props.page} />
    </>
  );
};

export default CommonLayout;
