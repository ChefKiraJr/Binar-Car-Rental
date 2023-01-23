import React from 'react';
import './whyUs.css';
import { CompleteIcon, PriceIcon, TimeIcon, ProfessionalIcon } from './Dummy';

const WhyUs = () => {
  return (
    <div className="why-us__container" id="why-us">
      <div className="why-us__content">
        <div className="why-us__title">
          <p>Why Us?</p>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="why-us__information">
          <div className="why-us-information__detail">
            <CompleteIcon />
            <p>Mobil Lengkap</p>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="why-us-information__detail">
            <PriceIcon />
            <p>Harga Murah</p>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="why-us-information__detail">
            <TimeIcon />
            <p>Layanan 24 Jam</p>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="why-us-information__detail">
            <ProfessionalIcon />
            <p>Sopir Profesional</p>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
