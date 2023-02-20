import React from 'react';
import { PeopleIcon } from '../../../../carDetail/components/carInformation/Dummy';
import './paymentDetail.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';

const PaymentDetail = () => {
  return (
    <div className="payment-detail__container">
      <div className="payment-detail__main">
        <div className="payment-detail__choice">
          <p>Pilih Bank Transfer</p>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>
          <div className="payment-detail__select">
            <div className="payment-detail__option">
              <p>BCA</p>
              <p>BCA Transfer</p>
            </div>
            <div className="payment-detail__option">
              <p>BNI</p>
              <p>BNI Transfer</p>
            </div>
            <div className="payment-detail__option">
              <p>Mandiri</p>
              <p>Mandiri Transfer</p>
            </div>
          </div>
        </div>
        <div className="payment-detail__summary">
          <div className="payment-summary__header">
            <p>Innova</p>
            <div className="payment-summary__people">
              <PeopleIcon />
              <p>6-8 orang</p>
            </div>
          </div>
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                padding="0"
                className="payment-accordion__button"
              >
                <div className="payment-accordion__title">
                  <p>Total</p>
                  <AccordionIcon w="24px" h="24px" />
                </div>
                <div className="payment-accordion__total">Rp 3.500.000</div>
              </AccordionButton>
              <AccordionPanel pb={4} padding="0">
                <div className="payment-accordion__info">
                  <p>Harga</p>
                  <div className="accordion-info__desc">
                    <p>Sewa Mobil Rp.500.000 x 7 Hari</p>
                    <p>Rp 3.500.000</p>
                  </div>
                </div>
                <div className="payment-accordion__info">
                  <p>Biaya Lainnya</p>
                  <div className="accordion-info__desc">
                    <p>Pajak</p>
                    <p className="accordion-info__highlight">Termasuk</p>
                  </div>
                  <div className="accordion-info__desc">
                    <p>Biaya makan sopir</p>
                    <p className="accordion-info__highlight">Termasuk</p>
                  </div>
                </div>
                <div className="payment-accordion__info">
                  <p>Belum Termasuk</p>
                  <div className="accordion-info__desc">
                    <p>Bensin</p>
                  </div>
                  <div className="accordion-info__desc">
                    <p>Tol dan parkir</p>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className="payment-summary__total">
            <p>Total</p>
            <p>Rp 3.500.000</p>
          </div>
          <Button
            w="100%"
            h="36px"
            padding="8px"
            color="#fff"
            fontWeight="700"
            fontSize="14px"
            lineHeight="20px"
            backgroundColor="#5CB85F"
            borderRadius="2px"
          >
            Bayar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
