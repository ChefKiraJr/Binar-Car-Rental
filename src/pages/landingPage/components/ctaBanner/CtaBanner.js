import React from 'react';
import './ctaBanner.css';
import { Button } from '@chakra-ui/react';

const CtaBanner = ({ navigate }) => {
  return (
    <div className="banner__container">
      <div className="banner__content">
        <div className="banner__main-text">
          Sewa Mobil di (Lokasimu) Sekarang
        </div>
        <div className="banner__desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Button
          className="banner__button"
          backgroundColor="#5CB85F"
          color="white"
          borderRadius="2px"
          padding="8px 12px"
          w="140px"
          h="36px"
          fontSize="14px"
          fontWeight="700"
          lineHeight="20px"
          onClick={() => navigate('/car-search')}
        >
          Mulai Sewa Mobil
        </Button>
      </div>
    </div>
  );
};

export default CtaBanner;
