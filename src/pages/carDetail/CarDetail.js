import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import { getCarDetail } from '../../store/actions/getCarDetailAction';
import './carDetail.css';
import CarInformation from './components/carInformation/CarInformation';
import DetailForm from './components/detailForm/DetailForm';

const CarDetail = () => {
  const { anak } = useParams();
  const { carDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarDetail(anak));
  }, [anak]);
  return (
    <CommonLayout>
      <div className="car-detail__header"></div>'
      <DetailForm />
      <CarInformation data={carDetail} />
    </CommonLayout>
  );
};

export default CarDetail;
