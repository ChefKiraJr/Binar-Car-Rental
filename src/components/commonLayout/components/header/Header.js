import React from 'react';
import './header.css';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Header = ({ scroller, page }) => {
  const navigate = useNavigate();
  const handleLink = (content) => {
    scroller.scrollTo(content, {
      smooth: true,
      offset: -125,
      duration: 200,
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo"></div>
        <div
          className={
            page === 'landingPage' ? 'header-nav' : 'header-nav__unfunc'
          }
        >
          <p onClick={() => handleLink('our-service')}>Our Service</p>
          <p onClick={() => handleLink('why-us')}>Why Us</p>
          <p onClick={() => handleLink('testimonial')}>Testimonial</p>
          <p onClick={() => handleLink('faq')}>FAQ</p>
          <Button
            w="81px"
            h="36px"
            padding="8px 12px"
            color="#fff"
            fontWeight="700"
            fontSize="14px"
            lineHeight="20px"
            backgroundColor="#5CB85F"
            borderRadius="2px"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </div>
        <>
          <HamburgerIcon
            onClick={onOpen}
            w="24px"
            h="24px"
            className="drawer-button"
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <p className="drawer-nav__head">BCR</p>
              </DrawerHeader>
              <DrawerBody>
                <div className="drawer-nav__body">
                  <p onClick={() => handleLink('our-service')}>Our Service</p>
                  <p onClick={() => handleLink('why-us')}>Why Us</p>
                  <p onClick={() => handleLink('testimonial')}>Testimonial</p>
                  <p onClick={() => handleLink('faq')}>FAQ</p>
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
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Header;
