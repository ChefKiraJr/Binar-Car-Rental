import React from 'react';
import './loginPage.css';
import loginImage from '../../../assets/images/login_image.png';
import { RectangleShape } from './Dummy';
import Login from './login/Login';
import Register from './register/Register';

const LoginPage = ({ page }) => {
  return (
    <div className="login-page__container">
      <div className="login-page__left-section">
        <div className="login-page__content">
          <RectangleShape />
          {page === 'login' ? <Login /> : <Register />}
        </div>
      </div>
      <div className="login-page__right-section">
        <p>Binar Car Rental</p>
        <img src={loginImage} alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
