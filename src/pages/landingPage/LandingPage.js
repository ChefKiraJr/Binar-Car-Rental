import React from 'react';
import { useNavigate } from 'react-router';
import CommonLayout from '../../components/commonLayout/CommonLayout';
import CtaBanner from './components/ctaBanner/CtaBanner';
import Faq from './components/faq/Faq';
import HeroSection from './components/heroSection/HeroSection';
import OurServices from './components/ourServices/OurServices';
import Testimony from './components/testimony/Testimony';
import WhyUs from './components/whyUs/WhyUs';
import './landingPage.css';
import { scroller } from 'react-scroll';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <CommonLayout scroller={scroller} page="landingPage">
      <HeroSection navigate={navigate} />
      <OurServices />
      <WhyUs />
      <Testimony />
      <CtaBanner navigate={navigate} />
      <Faq />
    </CommonLayout>
  );
};

export default LandingPage;
