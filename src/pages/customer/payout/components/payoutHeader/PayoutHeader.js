import React from "react";
import "./payoutHeader.css";
import {
  BackIcon,
  DashIcon,
} from "../../../payment/components/paymentHeader/Dummy";
import { useNavigate } from "react-router-dom";

const PayoutHeader = ({ anak }) => {
  const navigate = useNavigate();
  return (
    <div className="payout-header__container">
      <div className="payout-header__main">
        <div className="payout-header__title">
          <div
            className="payout-header__back"
            onClick={() => navigate(`/payment/${anak}`)}
          >
            <BackIcon />
          </div>
          <p>BCA Transfer</p>
        </div>
        <div className="payout-header__tracker">
          <div className="payout-tracker__step-active">
            <p>1</p>
            <p>Pilih Metode</p>
          </div>
          <DashIcon />
          <div className="payout-tracker__step-active">
            <p>2</p>
            <p>Bayar</p>
          </div>
          <DashIcon />
          <div className="payout-tracker__step">
            <p>3</p>
            <p>Tiket</p>
          </div>
        </div>
      </div>
      <div className="payout-header__number">Order ID: {anak}</div>
    </div>
  );
};

export default PayoutHeader;
