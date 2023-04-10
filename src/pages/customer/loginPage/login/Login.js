import React, { useEffect, useState } from 'react';
import './login.css';
import { Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    setInput(temp);
  };
  const handleSubmit = () => {
    localStorage.setItem('email', input.email);
    navigate('/home');
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div className="login__container">
      <p>Welcome Back!</p>
      <div className="login__form">
        <div className="login__input">
          <p>Email</p>
          <Input
            type="text"
            name="email"
            value={input.email}
            placeholder="Contoh: johndee@gmail.com"
            border="1px solid rgba(0, 0, 0, 0.1);"
            borderRadius="5px"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="login__input">
          <p>Password</p>
          <Input
            type="password"
            name="password"
            value={input.password}
            placeholder="6+ karakter"
            border="1px solid rgba(0, 0, 0, 0.1);"
            borderRadius="5px"
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      <Button
        w="100%"
        h="36px"
        padding="8px 12px"
        color="#fff"
        fontWeight="700"
        fontSize="14px"
        lineHeight="20px"
        backgroundColor="#0D28A6"
        borderRadius="2px"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <p>
        Don’t have an account?{' '}
        <span className="signup__link" onClick={() => navigate('register')}>
          Sign Up for free
        </span>
      </p>
    </div>
  );
};

export default Login;
