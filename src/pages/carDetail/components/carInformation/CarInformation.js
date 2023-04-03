import React, { useState } from "react";
import "./carInformation.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { PeopleIcon, CalendarIcon } from "./Dummy";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const CarInformation = ({ data }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 6));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleClick = () => {
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    const diff = endDate.getTime() - startDate.getTime();
    const msInDay = 1000 * 3600 * 24;
    const range = diff / msInDay + 1;
    localStorage.setItem("range", range);
    navigate(`/payment/${data.id}`);
  };
  const navigate = useNavigate();
  return (
    <>
      {data && (
        <div className="car-information__container">
          <div className="car-information__main">
            <div className="car-information__content">
              <div className="car-content__header">Tentang Paket</div>
              <div className="car-content__desc">
                <div className="car-desc__header">Include</div>
                <div className="car-desc__info">
                  <ul>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </div>
              </div>
              <div className="car-content__desc">
                <div className="car-desc__header">Exclude</div>
                <div className="car-desc__info">
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
              <Accordion allowToggle>
                <AccordionItem border="none" className="car-content__desc">
                  <AccordionButton
                    padding="0"
                    className="car-accordion__button"
                  >
                    <div className="car-desc__header">
                      Refund, Reschedule, Overtime
                    </div>
                    <AccordionIcon w="24px" h="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4} padding="0">
                    <div className="car-desc__info">
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="car-information__card">
              <div className="car-card__image">
                <img src={data.image} alt="innova-car" />
              </div>
              <div className="car-card__header">
                <p>{data.name}</p>
                <div className="car-card__people">
                  <PeopleIcon />
                  <p>
                    {data.category === "large"
                      ? "6 - 8 orang"
                      : data.category === "medium"
                      ? "4 - 6 orang"
                      : "2 - 4 orang"}
                  </p>
                </div>
              </div>
              <div className="car-card__date">
                <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                <div className="car-card__input">
                  <DatePicker
                    dateFormat="MMM dd yyyy"
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    includeDateIntervals={[
                      { start: startDate, end: addDays(startDate, 6) },
                    ]}
                  />
                  <CalendarIcon />
                </div>
              </div>
              <div className="car-card__price">
                <p>Total</p>
                <p>{`Rp ${data.price}`}</p>
              </div>
              <Button
                w="100%"
                h="36px"
                padding="8px 0"
                color="#fff"
                fontWeight="700"
                fontSize="14px"
                lineHeight="20px"
                backgroundColor="#5CB85F"
                borderRadius="2px"
                onClick={() => handleClick()}
              >
                Lanjutkan Pembayaran
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarInformation;
