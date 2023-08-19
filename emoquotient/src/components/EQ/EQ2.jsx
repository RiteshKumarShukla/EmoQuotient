import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EQSectionWrapper = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding:0;
  }
`;

const EQBox = styled(motion.div)`
  flex: 1;
  padding: 20px;
  margin-right: 40px;
  max-width: 300px;

  &:first-child {
    margin-right: 150px;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    &:first-child {
        margin-right:0;
    }
  }
`;

const EQHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const EQParagraph = styled.p`
  font-size: 18px;
  color: #333;
`;

const EQSection2 = () => {
  return (
    <EQSectionWrapper>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EQHeading>Be the best you <br />with EQ</EQHeading>
      </EQBox>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <EQParagraph>
          Not having your own emotions under control might be holding you back.
        </EQParagraph>
      </EQBox>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <EQParagraph>
          Additionally, not understanding those of others stops you from being parent, friend you can be.
        </EQParagraph>
      </EQBox>
    </EQSectionWrapper>
  );
};

export default EQSection2;
