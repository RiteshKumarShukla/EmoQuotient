import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardSectionWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  & > span {
    margin-left: 10px;
    font-size: 24px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: max-content;
  position: relative;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% + 20px));
    }
  }
`;
const Card = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  max-width: 300px;
  padding: 20px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: #7f00ff;
  }
}
`;

const CardEmoji = styled.span`
  font-size: 34px;
  display: block;
  margin-bottom: 10px;
`;

const CardHeading = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const CardParagraph = styled.p`
  font-size: 16px;
  color: #fff;
`;

const cardData = [
    {
        emoji: '😊',
        heading: 'Happiness',
        paragraph: 'Discover the joy of small moments and find happiness within.',
        bgColor: '#ff8f00'
    },
    {
        emoji: '🧘',
        heading: 'Mindfulness',
        paragraph: 'Practice mindfulness to stay present and reduce stress.',
        bgColor: '#388e3c'
    },
    {
        emoji: '💡',
        heading: 'Creativity',
        paragraph: 'Boost your creative thinking and spark new ideas.',
        bgColor: '#1976d2'
    },
    {
        emoji: '❤️',
        heading: 'Relationships',
        paragraph: 'Strengthen connections and build lasting relationships.',
        bgColor: '#d32f2f'
    },
    {
        emoji: '🌟',
        heading: 'Self-Improvement',
        paragraph: 'Elevate yourself through continuous growth and learning.',
        bgColor: '#fbc02d'
    },
    {
        emoji: '🎉',
        heading: 'Celebration',
        paragraph: 'Celebrate your achievements and embrace success.',
        bgColor: '#7b1fa2'
    },
    {
        emoji: '🌈',
        heading: 'Positivity',
        paragraph: 'Infuse positivity into your life for a brighter outlook.',
        bgColor: '#4caf50'
    },
    {
        emoji: '🌞',
        heading: 'Well-Being',
        paragraph: 'Prioritize your well-being and lead a fulfilling life.',
        bgColor: '#e64a19'
    }
];


const CardSection = () => {
    return (
        <CardSectionWrapper>
            <SectionHeading>
                Does this sound similar... <span>🤔</span>
            </SectionHeading>
            <CardContainer>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        bgColor={card.bgColor}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <CardEmoji>{card.emoji}</CardEmoji>
                        <CardHeading>{card.heading}</CardHeading>
                        <CardParagraph>{card.paragraph}</CardParagraph>
                    </Card>
                ))}
            </CardContainer>
        </CardSectionWrapper>
    );
};

export default CardSection;
