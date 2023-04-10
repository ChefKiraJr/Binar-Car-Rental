import React, { useState, useEffect } from 'react';
import './payoutDetail.css';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CopyIcon, UploadIcon } from './Dummy';
import moment from 'moment/moment';
import Timer24 from '../Timer24';
import Timer10 from '../Timer10';

const PayoutDetail = ({ anak, paymentMethod, totalPayment }) => {
  const [image, setImage] = useState(null);
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [confirmButtonStatus, setConfirmButtonStatus] = useState(false);
  const [dueDate, setDueDate] = useState();
  const findDueDate = () => {
    const due = moment().add(1, 'days').format('LLLL');
    setDueDate(due);
  };
  const navigate = useNavigate();
  const handleImage = (e) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleSubmit = () => {
    localStorage.setItem('slip', image);
    setConfirmButtonStatus(true);
  };
  useEffect(() => {
    findDueDate();
  }, []);
  return (
    <div className="payout-detail__container">
      <div className="payout-detail__main">
        <div className="payout-detail__info">
          <div className="payout-detail__time">
            <div className="payout-time__text">
              <p>Selesaikan Pembayaran Sebelum</p>
              <p>{dueDate}</p>
            </div>
            <div className="payout-time__number">
              <Timer24 duration={24 * 60 * 60 * 1000} />
            </div>
          </div>
          <div className="payout-detail__bank">
            <p>Lakukan Transfer Ke</p>
            <div className="payout-detail__bank-name">
              <div className="payout-bank__badge">
                <p>{paymentMethod}</p>
              </div>
              <div className="payout-bank__detail">
                <p>{paymentMethod} Transfer</p>
                <p>a.n Binar Car Rental</p>
              </div>
            </div>
            <div className="payout-detail__bank-number">
              <p>Nomor Rekening</p>
              <div className="payout-number__text">
                <p>54104257877</p>
                <CopyIcon />
              </div>
            </div>
            <div className="payout-detail__bank-total">
              <p>Total Bayar</p>
              <div className="payout-total__text">
                <p>Rp {totalPayment}</p>
                <CopyIcon />
              </div>
            </div>
          </div>
          <div className="payout-detail__instruction">
            <p>Intruksi Pembayaran</p>
            <div className="payout-instruction__option">
              <div className="payout-option__active">
                <p>ATM {paymentMethod}</p>
              </div>
              <div className="payout-option__inactive">
                <p>M-{paymentMethod}</p>
              </div>
              <div className="payout-option__inactive">
                <p>{paymentMethod} Klik</p>
              </div>
              <div className="payout-option__inactive">
                <p>Internet Banking</p>
              </div>
            </div>
            <div className="payout-instruction__list">
              <li>Masukkan kartu ATM, lalu PIN</li>
              <li>
                Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek{' '}
                {paymentMethod} Virtual Account"
              </li>
              <li>
                Masukkan nomor {paymentMethod} Virtual Account: 70020+Order ID
              </li>
              <li>
                Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                menyelesaikan transaksi
              </li>
              <li>Ambil dan simpanlah bukti transaksi tersebut</li>
            </div>
          </div>
        </div>
        {confirmStatus ? (
          <div className="payout-detail__confirmation">
            <div className="payout-confirmation__header">
              <p>Konfirmasi Pembayaran</p>
              <Timer10 duration={10 * 60 * 1000} />
            </div>
            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>
            <div className="payout-confirmation__upload">
              <p>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
              <div
                className="payout-confirmation__preview"
                onClick={() => document.querySelector('.input-field').click()}
              >
                <form>
                  <input
                    id="fileInput"
                    type="file"
                    className="input-field"
                    accept="image/*"
                    onChange={(event) => handleImage(event)}
                    hidden
                  />
                  {image ? (
                    <img
                      src={image}
                      alt="proof"
                      style={{ width: '296px', height: '162px' }}
                    />
                  ) : (
                    <UploadIcon />
                  )}
                </form>
              </div>
            </div>
            {confirmButtonStatus ? (
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
                onClick={() => navigate(`/ticket/${anak}`)}
              >
                Konfimrasi
              </Button>
            ) : (
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
                onClick={handleSubmit}
              >
                Upload
              </Button>
            )}
          </div>
        ) : (
          <div className="payout-detail__check">
            <p>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </p>
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
              onClick={() => setConfirmStatus(true)}
            >
              Konfirmasi Pembayaran
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayoutDetail;
