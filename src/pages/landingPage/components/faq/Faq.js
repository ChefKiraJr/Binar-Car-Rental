import React from 'react';
import './faq.css';
import { ArrowIcon } from './Dummy';

const Faq = () => {
  return (
    <div className="faq__container" id="faq">
      <div className="faq__content">
        <div className="faq__text">
          <p>Frequently Asked Question</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="faq__list">
          <div className="faq__list-item">
            <p>Apa saja syarat yang dibutuhkan?</p>
            <ArrowIcon />
          </div>
          <div className="faq__list-item">
            <p>Berapa hari minimal sewa mobil lepas kunci?</p>
            <ArrowIcon />
          </div>
          <div className="faq__list-item">
            <p>Berapa hari sebelumnya sebaiknya booking sewa mobil?</p>
            <ArrowIcon />
          </div>
          <div className="faq__list-item">
            <p>Apakah Ada biaya antar-jemput?</p>
            <ArrowIcon />
          </div>
          <div className="faq__list-item">
            <p>Bagaimana jika terjadi kecelakaan</p>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
