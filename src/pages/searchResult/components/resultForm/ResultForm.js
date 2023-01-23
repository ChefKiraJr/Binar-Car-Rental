import { Button, Input, Select } from '@chakra-ui/react';
import React from 'react';
import './resultForm.css';

const ResultForm = ({ input, handleChange, handleEdit }) => {
  return (
    <div className="result-form__container">
      <div className="result-form__main">
        <div className="result-form__header">Pencarianmu</div>
        <div className="result-form__content">
          <div className="result-form__input">
            <p>Nama Mobil</p>
            <Input
              value={input.name}
              name="name"
              placeholder="Ketik nama/tipe mobil"
              color="#8A8A8A"
              fontSize="12px"
              fontWeight="400"
              lineHeight="18px"
              fontFamily="Rubik"
              fontStyle="normal"
              w="221px"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="result-form__input">
            <p>Kategori</p>
            <Select
              value={input.category}
              name="category"
              placeholder="Masukan Kapasitas Mobil"
              color="#8A8A8A"
              fontSize="12px"
              fontWeight="400"
              lineHeight="18px"
              fontFamily="Rubik"
              fontStyle="normal"
              w="221px"
              onChange={(event) => handleChange(event)}
            >
              <option value="small">2 - 4 orang</option>
              <option value="Medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </Select>
          </div>
          <div className="result-form__input">
            <p>Harga</p>
            <Select
              value={input.minPrice}
              name="minPrice"
              placeholder="Masukan Harga Sewa per Hari"
              color="#8A8A8A"
              fontSize="12px"
              fontWeight="400"
              lineHeight="18px"
              fontFamily="Rubik"
              fontStyle="normal"
              w="221px"
              onChange={(event) => handleChange(event)}
            >
              <option value="0">{`Rp 0 - Rp 1.000.000`}</option>
              <option value="1000001">{`> Rp 1.000.000`}</option>
            </Select>
          </div>
          <div className="result-form__input">
            <p>Status</p>
            <Select
              value={input.isRented}
              name="isRented"
              placeholder="Status Penyewaan"
              color="#8A8A8A"
              fontSize="12px"
              fontWeight="400"
              lineHeight="18px"
              fontFamily="Rubik"
              fontStyle="normal"
              w="221px"
              onChange={(event) => handleChange(event)}
            >
              <option value="false">Disewakan</option>
              <option value="true">Dijual</option>
            </Select>
          </div>
          <Button
            className="result-form__button"
            padding="8px 12px"
            color="#0D28A6"
            fontWeight="700"
            fontSize="14px"
            lineHeight="20px"
            backgroundColor="#fff"
            border="1px solid #0D28A6"
            borderRadius="2px"
            onClick={() => handleEdit()}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
