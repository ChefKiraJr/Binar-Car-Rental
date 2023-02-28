import React from "react";
import { Button } from "@chakra-ui/react";
import { DownloadIcon, ImageIcon, SuccessIcon } from "./Dummy";
import "./eTicketSuccess.css";

const ETicketSuccess = () => {
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
          <div className="ticket-download__preview">
            <ImageIcon />
            <p>PDF Viewer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETicketSuccess;
