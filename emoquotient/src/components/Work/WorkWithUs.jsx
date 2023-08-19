import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap; /* Added to wrap content on small screens */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left:200px;
  margin-right:200px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 500px;
  overflow-y: auto;
`;

const Headline = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

const SubHeadline = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #7f00ff;
`;

const Box = styled(motion.div)`
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const ScrollingContent = styled.div`
  padding-right: 10px;
`;

const ProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 4px;
  background-color: #7f00ff;
  transform-origin: bottom;
  transform: scaleY(0);
  transition: transform 0.3s ease-in-out;
`;

const WorkWithUsSection = () => {
  const handleScroll = (e) => {
    const element = e.target;
    const { scrollTop, scrollHeight, clientHeight } = element;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.transform = `scaleY(${scrollPercentage / 100})`;
    }
  };

  return (
    <SectionWrapper>
      <Container>
        <TopSection>
          <Headline>Work With Us</Headline>
          <SubHeadline>EmoQuotient</SubHeadline>
        </TopSection>
        <BottomSection>
          <LeftContent>
            <Box>
              <h3>Join Our Team</h3>
              <p>Explore exciting opportunities to work with a dynamic team.</p>
            </Box>
            <Box>
              <h3>Join Our Team</h3>
              <p>Explore exciting opportunities to work with a dynamic team.</p>
            </Box>
          </LeftContent>
          <RightContent onScroll={handleScroll}>
            <ContentWrapper>
              <ScrollingContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <Box key={index}>
                    <h3>Position {index + 1}</h3>
                    <p>Learn more about our open positions and apply.</p>
                  </Box>
                ))}
              </ScrollingContent>
            </ContentWrapper>
            <ProgressWrapper id="progress-bar" />
          </RightContent>
        </BottomSection>
      </Container>
    </SectionWrapper>
  );
};

export default WorkWithUsSection;
