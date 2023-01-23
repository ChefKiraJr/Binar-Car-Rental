import React from 'react';
import './heroSection.css';
import largeCar from '../../../../assets/images/mercedes_large.png';
import smallCar from '../../../../assets/images/mercedes_small.png';
import { Button } from '@chakra-ui/react';

const HeroSection = ({ navigate, page }) => {
  return (
    <div
      className={
        page === 'carSearch'
          ? 'hero-section__search'
          : 'hero-section__container'
      }
    >
      <div className="hero-section__content">
        <div className="hero-section__main-text">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>
        <div className="hero-section__desc-text">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        <Button
          className="hero-section__button"
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
          visibility={page === 'carSearch' && 'hidden'}
        >
          Mulai Sewa Mobil
        </Button>
        <div
          className={
            page === 'carSearch'
              ? 'hero-section__photo-search'
              : 'hero-section__photo-large'
          }
        >
          <img src={largeCar} alt="mercedes-car" />
        </div>
        <div
          className="hero-section__photo-small"
          style={{ display: page === 'carSearch' && 'none' }}
        >
          <img src={smallCar} alt="mercedes-car" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
