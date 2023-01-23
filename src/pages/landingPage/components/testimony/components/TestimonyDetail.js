import React from 'react';
import { RatingIcon } from './Dummy';
import './testimonyDetail.css';
import testimonyImage from '../../../../../assets/images/testimony_photo.png';

const TestimonyDetail = () => {
  return (
    <div className="testimony-detail__container">
      <div className="testimony-detail__avatar">
        <img src={testimonyImage} alt="john-dee" />
      </div>
      <div className="testimony-detail__main">
        <div className="testimony-detail__icon">
          <RatingIcon />
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”
        </p>
        <p>John Dee 32, Bromo</p>
      </div>
    </div>
  );
};

export default TestimonyDetail;
