import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 40px;
  text-align: center;
  border-top: 0.6px solid gray;
`;

const Logo = styled(motion.img)`
  max-width: 100px;
  margin-bottom: 10px;
`;

const AppName = styled.p`
  font-weight: bold;
  margin: 0;
  color:#7F00FF;
  font-size:30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction:column;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-right: 30px;

    svg {
      font-size: 24px;
      margin-right: 10px;
    }

  }
`;

const AppStoreLink = styled.a`
  display: block;
  margin-top: 20px;

  img {
    max-width: 150px;
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  opacity: 0.7;
`;

const StyledMapMarker = styled(FaMapMarkerAlt)`
  background-color: lightgreen;
  border-radius: 50%;
  padding: 5px;
`;

const StyledEnvelope = styled(FaEnvelope)`
  background-color: lightgreen;
  border-radius: 50%;
  padding: 5px;
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <Logo
                src="https://clipart-library.com/new_gallery/4-43779_how-to-draw-tongue-out-emoji-transparent-purple.png"
                alt="EmoQuotient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />
            <AppName>EmoQuotient</AppName>
            <InfoWrapper>
                <div>
                    <StyledMapMarker />
                    <p>Lucknow, India</p>
                </div>
                <div>
                    <StyledEnvelope />
                    <p>riteshshuklagem@gmail.com</p>
                </div>
            </InfoWrapper>
            <AppStoreLink href="#">
                <motion.img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
                    alt="Download on App Store"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AppStoreLink>
            <Copyright>© 2023 EmoQuotient. All rights reserved.</Copyright>
        </FooterWrapper>
    );
};

export default Footer;
