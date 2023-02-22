import React from "react";
import "./paymentForm.css";

const PaymentForm = ({ data }) => {
  console.log(data);
  return (
    <div className="payment-form__container">
      <div className="payment-form__main">
        <div className="payment-form__header">Detail Pesananmu</div>
        <div className="payment-form__content">
          <div className="payment-form__info">
            <div className="form-info__title">Nama/Tipe Mobil</div>
            <div className="form-info__desc">{data.name}</div>
          </div>
          <div className="payment-form__info">
            <div className="form-info__title">Kategori</div>
            <div className="form-info__desc">
              {data.category === "large"
                ? "6 - 8 orang"
                : data.category === "medium"
                ? "4 - 6 orang"
                : "2 - 4 orang"}
            </div>
          </div>
          <div className="payment-form__info">
            <div className="form-info__title">Tanggal Mulai Sewa</div>
            <div className="form-info__desc">2 Jun 2022</div>
          </div>
          <div className="payment-form__info">
            <div className="form-info__title">Tanggal Akhir Sewa</div>
            <div className="form-info__desc">8 Jun 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
