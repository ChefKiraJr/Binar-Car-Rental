import React, { useState } from 'react';
import './register.css';
import { Input, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    setInput(temp);
  };
  const handleSubmit = () => {
    toast({
      title: 'Register Success',
      description: 'Going to login page now.',
      status: 'success',
      position: 'top',
      duration: 1000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };
  return (
    <div className="register__container">
      <p>Sign Up</p>
      <div className="register__form">
        <div className="register__input">
          <p>Name*</p>
          <Input
            type="text"
            name="name"
            value={input.nameemail}
            placeholder="Nama Lengkap"
            border="1px solid rgba(0, 0, 0, 0.1);"
            borderRadius="5px"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="register__input">
          <p>Email*</p>
          <Input
            type="type"
            name="email"
            value={input.email}
            placeholder="Contoh: johndee@gmail.com"
            border="1px solid rgba(0, 0, 0, 0.1);"
            borderRadius="5px"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="register__input">
          <p>Create Password*</p>
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
        Sign Up
      </Button>
      <p>
        Already have an account{' '}
        <span className="signup__link" onClick={() => navigate('/')}>
          Sign In here
        </span>
      </p>
    </div>
  );
};

export default Register;
