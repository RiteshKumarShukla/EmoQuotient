import React from "react";
import './Hero.css'
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  width: 85%;
  margin: auto;
  margin-top:100px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppImage = styled.img`
  max-width: 30%;
  margin-right: 20px;
`;

const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StarIcon = styled(FaStar)`
  color: #ffcd00;
  font-size:20px;
`;

const RightDiv = styled(motion.div)`
  
`;

const Heading = styled.h1`
  font-size: 43px;
  font-weight: bold;
  text-align:left;
  margin-left:30%;
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #7f00ff;
`;

const HeroSection = () => {

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <HeroWrapper>
      <LeftSection>
        <Paragraph style={{ marginLeft: "-20%", marginBottom:"0px", color:"black" }}>EmoQuotient</Paragraph>
        <Heading>Mastering your life <br /> by mastering <br /> emotions</Heading>
        <div style={{ display: "flex", marginLeft: "190px", alignItems: "center" }}>
          <AppImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" alt="Play Store" />
          <StarsWrapper style={{marginTop:"-10px",}}>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} />
            ))}
          </StarsWrapper>
        </div>
        <Paragraph style={{ marginLeft: "144px", fontSize: "13px", marginTop: "-10px" ,color:"black"}}>100+ AppStore Reviews</Paragraph>
      </LeftSection>
      <RightSection>
        <RightDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="cube" ref={ref}>
              <div className="side front">
                Positivity
              </div>
              <div className="side left">
                Mindfulness
              </div>
              <div className="side right">
                Self-Improvement
              </div>
              <div className="side top">
                Well Being
              </div>
              <div className="side bottom">
                Celebration
              </div>
              <div className="side back">
                Creativity
              </div>
            </div>
          </div>
        </RightDiv>
      </RightSection>
    </HeroWrapper>
  );
};

export default HeroSection;
