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

const EQSection = () => {
  return (
    <EQSectionWrapper>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EQHeading>EQ beats IQ</EQHeading>
      </EQBox>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <EQParagraph>
          People with high emotional intelligence (EQ) live more fulfilled lives.
          They tend to be happier and have healthier relationships.
        </EQParagraph>
      </EQBox>
      <EQBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <EQParagraph>
          They are more successful in their pursuits and make for inspiring leaders.
          According to science, they earn $29k a year.
        </EQParagraph>
      </EQBox>
    </EQSectionWrapper>
  );
};

export default EQSection;
