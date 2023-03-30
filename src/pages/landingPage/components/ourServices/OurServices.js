import React from "react";
import "./ourServices.css";
import serviceImage from "../../../../assets/images/img_service.webp";
import { ListIcon } from "./Dummy";

const OurServices = () => {
  return (
    <div className="our-service__container" id="our-service">
      <div className="our-service__content">
        <img src={serviceImage} alt="service" className="our-service__image" />
        <div className="our-service__information">
          <div className="our-service__information-header">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </div>
          <div className="our-service__information-desc">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </div>
          <div className="our-service__information-list">
            <ListIcon />
            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
          </div>
          <div className="our-service__information-list">
            <ListIcon />
            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
          </div>
          <div className="our-service__information-list">
            <ListIcon />
            <p>Sewa Mobil Jangka Panjang Bulanan</p>
          </div>
          <div className="our-service__information-list">
            <ListIcon />
            <p>Gratis Antar - Jemput Mobil di Bandara</p>
          </div>
          <div className="our-service__information-list">
            <ListIcon />
            <p>Layanan Airport Transfer / Drop In Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
