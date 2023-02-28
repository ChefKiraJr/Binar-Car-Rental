import React from "react";
import "./eTicketHeader.css";
import {
  BackIcon,
  DashIcon,
} from "../../../payment/components/paymentHeader/Dummy";
import { useNavigate } from "react-router-dom";

const ETicketHeader = ({ anak }) => {
  const navigate = useNavigate();
  return (
    <div className="ticket-header__container">
      <div className="ticket-header__main">
        <div className="ticket-header__title">
          <div
            className="ticket-header__back"
            onClick={() => navigate(`/payment/${anak}`)}
          >
            <BackIcon />
          </div>
          <p>Tiket</p>
        </div>
        <div className="ticket-header__tracker">
          <div className="ticket-tracker__step-active">
            <p>1</p>
            <p>Pilih Metode</p>
          </div>
          <DashIcon />
          <div className="ticket-tracker__step-active">
            <p>2</p>
            <p>Bayar</p>
          </div>
          <DashIcon />
          <div className="ticket-tracker__step-active">
            <p>3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>
      <div className="ticket-header__number">Order ID: {anak}</div>
    </div>
  );
};

export default ETicketHeader;
