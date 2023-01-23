import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import './carDetail.css';
import CarInformation from './components/carInformation/CarInformation';
import DetailForm from './components/detailForm/DetailForm';

const CarDetail = () => {
  const [data, setData] = useState();
  const { anak } = useParams();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${anak}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [anak]);
  return (
    <CommonLayout>
      <div className="car-detail__header"></div>'
      <DetailForm />
      <CarInformation data={data} />
    </CommonLayout>
  );
};

export default CarDetail;
