import React from 'react';
import './paymentHeader.css';
import { BackIcon, DashIcon } from './Dummy';

const PaymentHeader = () => {
  return (
    <div className="payment-header__container">
      <div className="payment-header__main">
        <div className="payment-header__title">
          <BackIcon />
          <p>Pembayaran</p>
        </div>
        <div className="payment-header__tracker">
          <div className="payment-tracker__step-active">
            <p>1</p>
            <p>Pilih Metode</p>
          </div>
          <DashIcon />
          <div className="payment-tracker__step">
            <p>2</p>
            <p>Bayar</p>
          </div>
          <DashIcon />
          <div className="payment-tracker__step">
            <p>3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHeader;
