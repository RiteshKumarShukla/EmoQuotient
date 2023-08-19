import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
  background-image: url("https://cdn.dribbble.com/users/77121/screenshots/15957180/media/fbf4dd9370a67e54ba45a7ae5b136829.gif");
  background-size: cover;
  width: 80%;
  margin: auto;
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 50%;
  padding: 20px;
  color: #000;
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const TopText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const SubHeading = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
  text-align: left;
`;

const ImageWithText = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <LeftContent>
          <TopText>Built out of frustration</TopText>
          <Heading>Meet the EmoQuotient App</Heading>
        </LeftContent>
        <RightContent>
          <SubHeading>
            A personalized pocket coach that provides bite-sized,
            science-driven tools to boost emotional intelligence.
            <br />
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </SubHeading>
        </RightContent>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default ImageWithText;
