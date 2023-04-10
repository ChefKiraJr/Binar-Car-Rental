import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { DownloadIcon, ImageIcon, SuccessIcon } from './Dummy';
import './eTicketSuccess.css';

const ETicketSuccess = () => {
  const [invoiceImage, setInvoiceImage] = useState(null);
  useEffect(() => {
    const slip = localStorage.getItem('slip');
    setInvoiceImage(slip);
  }, []);
  return (
    <div className="ticket-success__container">
      <div className="ticket-success__main">
        <div className="ticket-success__info">
          <SuccessIcon />
          <p>Pembayaran Berhasil!</p>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <div className="ticket-success__download">
          <div className="ticket-download__header">
            <p>Invoice</p>
            <Button
              color="#0D28A6"
              w="96px"
              h="36px"
              variant="outline"
              padding="8px 12px"
              border="1px solid #0D28A6"
              borderRadius="2px"
              display="flex"
              gap="10px"
            >
              <DownloadIcon />
              <p className="download-button__text">Unduh</p>
            </Button>
          </div>
          <div className="ticket-download__info">*no invoice</div>
          {invoiceImage ? (
            <img
              src={invoiceImage}
              alt="invoice"
              style={{ width: '557px', height: '162px' }}
            />
          ) : (
            <div className="ticket-download__preview">
              <ImageIcon />
              <p>PDF Viewer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ETicketSuccess;
