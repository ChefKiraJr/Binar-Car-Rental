import React, { useEffect } from 'react';
import CommonLayout from '../../../components/commonLayout/CommonLayout';
import PaymentDetail from './components/paymentDetail/PaymentDetail';
import PaymentForm from './components/paymentForm/PaymentForm';
import PaymentHeader from './components/paymentHeader/PaymentHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCarDetail } from '../../../store/actions/getCarDetailAction';

const Payment = () => {
  const startDate = localStorage
    .getItem('startDate')
    .split(' ')
    .slice(1, 4)
    .join(' ');
  const endDate = localStorage
    .getItem('endDate')
    .split(' ')
    .slice(1, 4)
    .join(' ');
  const range = localStorage.getItem('range');
  const { anak } = useParams();
  const { carDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarDetail(anak));
  }, [anak]);
  return (
    <CommonLayout page="payment">
      <PaymentHeader anak={anak} />
      <PaymentForm data={carDetail} startDate={startDate} endDate={endDate} />
      <PaymentDetail data={carDetail} range={range} />
    </CommonLayout>
  );
};

export default Payment;
