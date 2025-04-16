import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageContainer, PageSection } from '../components/Layout';
import { SectionTitle, Button, Flex, Spacer } from '../components/UIComponents';
import ParticleBackground from '../components/ParticleBackground';

const HeroSection = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #FFFFFF, #7B68EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(123, 104, 238, 0.5);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 700px;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Planet = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.background || props.theme.gradients.primary};
  box-shadow: 0 0 20px ${props => props.glow || 'rgba(30, 144, 255, 0.5)'};
  z-index: -1;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(10, 10, 42, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.box};
  border: 1px solid rgba(123, 104, 238, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(123, 104, 238, 0.4);
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const HomePage = () => {
  return (
    <>
      <ParticleBackground />
      
      <HeroSection>
        <Planet 
          style={{ 
            width: '150px', 
            height: '150px', 
            top: '20%', 
            right: '15%',
            background: 'linear-gradient(to right, #B22222, #8B0000)',
            boxShadow: '0 0 30px rgba(178, 34, 34, 0.5)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: 360
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        <Planet 
          style={{ 
            width: '80px', 
            height: '80px', 
            bottom: '25%', 
            left: '10%',
            background: 'linear-gradient(to right, #1E90FF, #0000CD)',
            boxShadow: '0 0 20px rgba(30, 144, 255, 0.5)'
          }}
          animate={{
            y: [0, 15, 0],
            rotate: 360
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        <Planet 
          style={{ 
            width: '120px', 
            height: '120px', 
            top: '60%', 
            right: '25%',
            background: 'linear-gradient(to right, #DAA520, #B8860B)',
            boxShadow: '0 0 25px rgba(218, 165, 32, 0.5)'
          }}
          animate={{
            y: [0, 10, 0],
            x: [0, -15, 0],
            rotate: 360
          }}
          transition={{
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        <Planet 
          style={{ 
            width: '60px', 
            height: '60px', 
            top: '30%', 
            left: '20%',
            background: 'linear-gradient(to right, #32CD32, #006400)',
            boxShadow: '0 0 15px rgba(50, 205, 50, 0.5)'
          }}
          animate={{
            y: [0, -12, 0],
            x: [0, 10, 0],
            rotate: 360
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Great Neck South Astronomy Club
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exploring the cosmos and inspiring the next generation of astronomers
        </HeroSubtitle>
        
        <Flex justify="center" gap="1.5rem">
          <Button 
            as={motion.a}
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join Us
          </Button>
          
          <Button 
            as={Link}
            to="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Learn More
          </Button>
        </Flex>
      </HeroSection>
      
      <PageContainer>
        <PageSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>What We Do</SectionTitle>
          
          <FeaturesGrid>
            <FeatureCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureIcon>🔭</FeatureIcon>
              <FeatureTitle>Stargazing Events</FeatureTitle>
              <FeatureDescription>
                Regular stargazing sessions using our telescopes to observe planets, stars, and deep sky objects.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureIcon>🪐</FeatureIcon>
              <FeatureTitle>Astronomy Workshops</FeatureTitle>
              <FeatureDescription>
                Educational workshops on various astronomy topics, from planetary science to cosmology.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureIcon>🚀</FeatureIcon>
              <FeatureTitle>Space Exploration</FeatureTitle>
              <FeatureDescription>
                Discussions and presentations on current space missions and future exploration plans.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </PageSection>
        
        <PageSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Upcoming Events</SectionTitle>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeatureTitle>Lunar Eclipse Viewing</FeatureTitle>
            <FeatureDescription>
              Join us for a special event to observe the upcoming lunar eclipse. We'll have telescopes set up and experts on hand to explain the phenomenon.
            </FeatureDescription>
            <Spacer height="1rem" />
            <Button 
              as={motion.button}
              primary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RSVP Now
            </Button>
          </FeatureCard>
          
          <Spacer />
          
          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureTitle>Astrophotography Workshop</FeatureTitle>
            <FeatureDescription>
              Learn how to capture stunning images of the night sky with your camera or smartphone. Basic equipment will be provided.
            </FeatureDescription>
            <Spacer height="1rem" />
            <Button 
              as={motion.button}
              primary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </Button>
          </FeatureCard>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
