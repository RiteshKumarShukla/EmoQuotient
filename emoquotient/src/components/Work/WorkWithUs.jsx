import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import './work.css'

const SectionWrapper = styled.section`
  padding: 80px 0;
  width: 85%;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  margin-right: 200px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  word-spacing: 4px;
  line-height: 30px;
  font-size: larger;
  padding: 20px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 600px;
  padding: 20px;
  width: 40%;
  word-spacing: 4px;
  line-height: 30px;
  font-size: larger;
`;

const Headline = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const SubHeadline = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #7f00ff;
`;

const Box = styled(motion.div)`
  background-color:white;
  border-radius: 10px;
  width:450px;
  text-align:left;
  padding:10px;
  margin:10px;
  
0*  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
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

const arr = [
  {
    heading: "Power through, even when the going gets tough",
    para: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc..",
  },
  {
    heading: "Learn more about who you are and where you want to go",
    para: "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    heading: "Play and grow together with others on the same journey",
    para: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
  },
  {
    heading: "Power through, even when the going gets tough",
    para: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc..",
  },
  {
    heading: "Learn more about who you are and where you want to go",
    para: "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    heading: "Power through, even when the going gets tough",
    para: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc..",
  },
  {
    heading: "Learn more about who you are and where you want to go",
    para: "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    heading: "Play and grow together with others on the same journey",
    para: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
  },
  {
    heading: "Power through, even when the going gets tough",
    para: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc..",
  },
  {
    heading: "Learn more about who you are and where you want to go",
    para: "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    heading: "Play and grow together with others on the same journey",
    para: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
  },
  {
    heading: "Power through, even when the going gets tough",
    para: "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc..",
  },
  {
    heading: "Learn more about who you are and where you want to go",
    para: "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    heading: "Play and grow together with others on the same journey",
    para: "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
  },
];


const WorkWithUsSection = () => {
  const handleScroll = (e) => {
    const element = e.target;
    const { scrollTop, scrollHeight, clientHeight } = element;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const progressBar = document.getElementById("progress-bar");
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
            <Box style={{ borderTop: "10px" }}>
              <span role="img" aria-label="Emoji" style={{ fontSize: "50px" }}>❤️</span>
              <h3>About</h3>
              <p>
                At ahead our goal is to make self-improvement fun and lasting.
                We know there's a way how to make it work. And that's what aHead
                is all about!
              </p>
            </Box>
            <Box style={{ background: "#ffffed" }}>
              <h3>Product</h3>
              <p>
                Sure, you could spend ages readling books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </Box>
          </LeftContent>
          <RightContent onScroll={handleScroll}>
            <ContentWrapper>
              <ScrollingContent>
                {arr.map((el, index) => (
                  <Box key={index}>
                    <h3>{el.heading}</h3>
                    <p>{el.para}</p>
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
