import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageContainer, PageSection } from '../components/Layout';
import { SectionTitle, SectionSubtitle, Card, Grid, Spacer } from '../components/UIComponents';
import ParticleBackground from '../components/ParticleBackground';

const AboutHero = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  background: ${props => props.theme.gradients.nebula};
  margin-bottom: 4rem;
`;

const AboutTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.text};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const AboutSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: ${props => props.theme.shadows.box};
`;

const AboutCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutPage = () => {
  return (
    <>
      <ParticleBackground />
      
      <AboutHero>
        <AboutTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Club
        </AboutTitle>
        
        <AboutSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the universe with Great Neck South High School's Astronomy Club
        </AboutSubtitle>
      </AboutHero>
      
      <PageContainer>
        <PageSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Mission</SectionTitle>
          
          <AboutImage />
          
          <p>
            The Great Neck South High School Astronomy Club is dedicated to fostering a passion for astronomy and space exploration among students. We provide a platform for students to learn about the cosmos, engage in hands-on astronomical activities, and develop a deeper understanding of our universe.
          </p>
          
          <Spacer />
          
          <p>
            Our club welcomes students of all backgrounds and experience levels, from complete beginners to advanced astronomy enthusiasts. We believe that the wonders of the universe should be accessible to everyone, and we strive to create an inclusive and supportive environment where members can explore their interests and expand their knowledge.
          </p>
          
          <Spacer height="3rem" />
          
          <SectionSubtitle>What We Do</SectionSubtitle>
          
          <Grid>
            <AboutCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Educational Meetings</h3>
              <p>
                We hold regular meetings where we discuss various astronomy topics, from the basics of our solar system to complex concepts like black holes and dark matter. Guest speakers, including professional astronomers and NASA scientists, occasionally join us to share their expertise.
              </p>
            </AboutCard>
            
            <AboutCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Observation Nights</h3>
              <p>
                We organize stargazing events where members can observe celestial objects through telescopes. These events provide hands-on experience with astronomical equipment and allow members to witness the beauty of the night sky firsthand.
              </p>
            </AboutCard>
            
            <AboutCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Competitions & Projects</h3>
              <p>
                Our club participates in astronomy competitions and conducts research projects. These activities challenge members to apply their knowledge and develop critical thinking skills while exploring fascinating astronomical phenomena.
              </p>
            </AboutCard>
          </Grid>
          
          <Spacer height="3rem" />
          
          <SectionSubtitle>Join Us</SectionSubtitle>
          
          <p>
            The GNS Astronomy Club meets every Wednesday after school in Room 401. No prior knowledge of astronomy is required to join – just bring your curiosity and enthusiasm! We welcome new members throughout the school year.
          </p>
          
          <Spacer />
          
          <p>
            To stay updated on our activities and events, follow us on Instagram and join our Discord server. You can also contact us at gnsastronomy@email.com for more information.
          </p>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default AboutPage;
