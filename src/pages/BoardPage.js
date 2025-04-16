import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageContainer, PageSection } from '../components/Layout';
import { SectionTitle, Grid } from '../components/UIComponents';
import BoardMemberCard from '../components/BoardMemberCard';
import ParticleBackground from '../components/ParticleBackground';

const BoardHero = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  background: ${props => props.theme.gradients.primary};
  margin-bottom: 4rem;
`;

const BoardTitle = styled(motion.h1)`
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

const BoardSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

// Sample board member data - in a real application, this would come from a database or API
const boardMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'President',
    bio: 'Alex has been passionate about astronomy since childhood. They lead the club with enthusiasm and have a special interest in exoplanets and the search for extraterrestrial life.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Jamie Rodriguez',
    role: 'Vice President',
    bio: 'Jamie specializes in astrophotography and has won several awards for their stunning images of nebulae. They coordinate our observation nights and equipment management.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Taylor Kim',
    role: 'Secretary',
    bio: 'Taylor is majoring in Physics and plans to pursue a career in astrophysics. They manage club communications and organize our educational workshops.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Jordan Patel',
    role: 'Treasurer',
    bio: 'Jordan handles the club\'s finances and fundraising efforts. Their knowledge of telescope optics has been invaluable for our equipment purchases.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Morgan Lee',
    role: 'Events Coordinator',
    bio: 'Morgan organizes all club events and outreach programs. They have a talent for making complex astronomical concepts accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Riley Chen',
    role: 'Social Media Manager',
    bio: 'Riley manages our online presence and creates engaging content about astronomy. They are particularly interested in the history of space exploration.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const BoardPage = () => {
  return (
    <>
      <ParticleBackground />
      
      <BoardHero>
        <BoardTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Board
        </BoardTitle>
        
        <BoardSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The dedicated team behind GNS Astronomy Club
        </BoardSubtitle>
      </BoardHero>
      
      <PageContainer>
        <PageSection
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Our Leadership Team</SectionTitle>
          
          <Grid minWidth="280px" gap="2rem">
            {boardMembers.map((member, index) => (
              <BoardMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </Grid>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default BoardPage;
