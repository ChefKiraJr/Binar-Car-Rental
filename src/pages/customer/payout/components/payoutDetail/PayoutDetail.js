import React from "react";
import "./payoutDetail.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PayoutDetail = ({ anak }) => {
  const navigate = useNavigate();
  return (
    <div className="payout-detail__container">
      <div className="payout-detail__main">
        <div className="payout-detail__info">
          <div className="payout-detail__time">
            <div className="payout-time__text">
              <p>Selesaikan Pembayaran Sebelum</p>
              <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
            </div>
            <div className="payout-time__number">
              <p>23.55.09</p>
            </div>
          </div>
          <div className="payout-detail__bank">
            <p>Lakukan Transfer Ke</p>
          </div>
          <div className="payout-detail__instruction">
            <p>Intruksi Pembayaran</p>
            <div className="payout-instruction__option">
              <div className="payout-option__active">
                <p>ATM BCA</p>
              </div>
              <div className="payout-option__inactive">
                <p>M-BCA</p>
              </div>
              <div className="payout-option__inactive">
                <p>BCA Klik</p>
              </div>
              <div className="payout-option__inactive">
                <p>Internet Banking</p>
              </div>
            </div>
            <div className="payout-instruction__list">
              <ul>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA
                  Virtual Account"
                </li>
                <li>Masukkan nomor BCA Virtual Account: 70020+Order ID</li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="payout-detail__confirmation">
          <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
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
            Konfirmasi Pembayaran
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PayoutDetail;
