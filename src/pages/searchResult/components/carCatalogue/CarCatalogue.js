import React from 'react';
import './carCatalogue.css';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const CarCatalogue = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="car-catalogue__container">
      {data && (
        <>
          {data.cars.length > 0 ? (
            <div className="car-catalogue__main">
              {data.cars.map((value, index) => {
                return (
                  <div className="car-catalogue__card" key={value.id}>
                    <div className="car-catalogue__image">
                      <img src={value.image} alt={`${value.name}`}></img>
                    </div>
                    <div className="car-catalogue__card-information">
                      <p>{value.name}</p>
                      <p>{`Rp ${value.price} / hari`}</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{' '}
                      </p>
                    </div>
                    <Button
                      w="100%"
                      h="48px"
                      padding="14px"
                      color="#fff"
                      fontWeight="700"
                      fontSize="14px"
                      lineHeight="20px"
                      backgroundColor="#5CB85F"
                      borderRadius="2px"
                      onClick={() =>
                        navigate(`/car-detail/${data.cars[index].id}`)
                      }
                    >
                      Pilih Mobil
                    </Button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="car-catalogue__availability">
              Maaf Mobil Yang Anda Cari Tidak Tersedia
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarCatalogue;
