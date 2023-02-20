import React from 'react';
import CommonLayout from '../../../components/commonLayout/CommonLayout';
import PaymentDetail from './components/paymentDetail/PaymentDetail';
import PaymentForm from './components/paymentForm/PaymentForm';
import PaymentHeader from './components/paymentHeader/PaymentHeader';

const Payment = () => {
  return (
    <CommonLayout page="payment">
      <div></div>
      <PaymentHeader />
      <PaymentForm />
      <PaymentDetail />
    </CommonLayout>
  );
};

export default Payment;
