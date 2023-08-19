import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
  margin-bottom:70px;

  @media (max-width: 768px) {
    margin-bottom:0px;
  }
`;

const Headline = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
  text-align: left;
  margin-left: 13%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  
  @media (max-width: 768px) {
    margin:20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const VacancyCard = styled(motion.div)`
  background-color: #ffffed;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 768px) {
    margin:20px;
  }
`;

const VacancyTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const VacancyPoints = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-top: 15px;
  li {
    margin-bottom: 10px;
  }
`;

const OpenVacanciesSection = () => {
    return (
        <SectionWrapper>
            <Headline>Open Vacancies</Headline>
            <GridContainer>
                <VacancyCard
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <VacancyTitle>Senior Full Stack Engineer</VacancyTitle>
                    <VacancyPoints>
                        <li>Full-time Position</li>
                        <li>Berlin or Remote</li>
                        <li>$65-85k, 0.5-1.50% equity share options</li>
                    </VacancyPoints>
                </VacancyCard>
                <VacancyCard
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <VacancyTitle>Senior Designer</VacancyTitle>
                    <VacancyPoints>
                        <li>Full-time Position</li>
                        <li>Berlin or Remote</li>
                        <li>$40-55k, 0.25-0.50% equity share options</li>
                    </VacancyPoints>
                </VacancyCard>
                <VacancyCard
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <VacancyTitle>Superstar Intern</VacancyTitle>
                    <VacancyPoints>
                        <li>Full-time Position</li>
                        <li>Berlin or Remote</li>
                        <li>$20-24k, 0.5-1.50% equity share options</li>
                    </VacancyPoints>
                </VacancyCard>
            </GridContainer>
        </SectionWrapper>
    );
};

export default OpenVacanciesSection;
