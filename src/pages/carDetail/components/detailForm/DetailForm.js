import React from 'react';
import './detailForm.css';

const DetailForm = () => {
  return (
    <div className="detail-form__main">
      <div className="detail-form__header">Pencarianmu</div>
      <div className="detail-form__content">
        <div className="detail-form__input">
          <p>Nama Mobil</p>
          <div className="detail-form__input-box"></div>
        </div>
        <div className="detail-form__input">
          <p>Kategori</p>
          <div className="detail-form__input-box"></div>
        </div>
        <div className="detail-form__input">
          <p>Nama Mobil</p>
          <div className="detail-form__input-box"></div>
        </div>
        <div className="detail-form__input">
          <p>Nama Mobil</p>
          <div className="detail-form__input-box"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
