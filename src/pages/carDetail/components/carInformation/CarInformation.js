import React from 'react';
import './carInformation.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { PeopleIcon } from './Dummy';

const CarInformation = ({ data }) => {
  return (
    <>
      {data && (
        <div className="car-information__container">
          <div className="car-information__main">
            <div className="car-information__content">
              <div className="car-content__header">Tentang Paket</div>
              <div className="car-content__desc">
                <div className="car-desc__header">Include</div>
                <div className="car-desc__info">
                  <ul>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </div>
              </div>
              <div className="car-content__desc">
                <div className="car-desc__header">Exclude</div>
                <div className="car-desc__info">
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
              <Accordion allowToggle>
                <AccordionItem border="none" className="car-content__desc">
                  <AccordionButton
                    padding="0"
                    className="car-accordion__button"
                  >
                    <div className="car-desc__header">
                      Refund, Reschedule, Overtime
                    </div>
                    <AccordionIcon w="24px" h="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4} padding="0">
                    <div className="car-desc__info">
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="car-information__card">
              <div className="car-card__image">
                <img src={data.image} alt="innova-car" />
              </div>
              <div className="car-card__header">
                <p>{data.name}</p>
                <div className="car-card__people">
                  <PeopleIcon />{' '}
                  <p>
                    {data.category === 'large'
                      ? '5 - 7 orang'
                      : data.category === 'medium'
                      ? '4 - 5 orang'
                      : '2 - 4 orang'}
                  </p>
                </div>
              </div>
              <div className="car-card__price">
                <p>Total</p>
                <p>{`Rp ${data.price}`}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarInformation;
