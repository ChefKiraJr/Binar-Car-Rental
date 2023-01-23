import React from 'react';
import TestimonySlider from './components/TestimonySlider';
import './testimony.css';

const Testimony = () => {
  return (
    <div className="testimony__container" id="testimonial">
      <div className="testimony__content">
        <div className="testimony__header">
          <p>Testimonial</p>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <TestimonySlider />
      </div>
    </div>
  );
};

export default Testimony;
