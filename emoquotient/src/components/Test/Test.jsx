import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const PrivacyParagraph = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 0px;
`;

const BeforeYouStartHeading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BeforeYouStartParagraph = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const Signature = styled(motion.div)`
  font-family: 'Sacramento', cursive;
  font-size: 36px;
  color: #000;
`;

const LoveText = styled.span`
  font-family: sans-serif;
  font-size: 15px;
`;

const StartButton = styled(motion.button)`
  padding: 15px 30px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const TimeParagraph = styled(motion.p)`
  font-size: 18px;
  color: gray;
  margin-top: 20px;
`;

const TypewriterEffect = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === text.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setVisibleText('');
        setCurrentIndex(0);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text]);

  return (
    <Signature>
      <LoveText>with love, </LoveText>
      {visibleText}
    </Signature>
  );
};

const GettingStartedSection = () => {
  return (
    <SectionWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <PrivacyParagraph>We Take Privacy Seriously</PrivacyParagraph>
        <BeforeYouStartHeading>Before you get started</BeforeYouStartHeading>
        <BeforeYouStartParagraph>
          We won't share your answers with anyone <br />(and won't ever tell you which friends said what about you).
        </BeforeYouStartParagraph>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <TypewriterEffect text="Ritesh" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <StartButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a test
        </StartButton>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <TimeParagraph>Take only 5 minutes</TimeParagraph>
      </motion.div>
    </SectionWrapper>
  );
};

export default GettingStartedSection;
