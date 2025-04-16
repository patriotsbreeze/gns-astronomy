import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: rgba(3, 0, 20, 0.9);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid rgba(123, 104, 238, 0.3);
`;

const FooterContent = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${props => props.theme.colors.secondary};
  }
`;

const FooterLink = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 0.8rem;
  transition: ${props => props.theme.transitions.standard};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(123, 104, 238, 0.2);
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>GNS Astronomy Club</FooterTitle>
          <FooterText>
            Exploring the cosmos and inspiring the next generation of astronomers at Great Neck South High School.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink 
            as="a" 
            href="/"
            whileHover={{ x: 5 }}
          >
            Home
          </FooterLink>
          <FooterLink 
            as="a" 
            href="/about"
            whileHover={{ x: 5 }}
          >
            About
          </FooterLink>
          <FooterLink 
            as="a" 
            href="/board"
            whileHover={{ x: 5 }}
          >
            Board
          </FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink 
            as="a" 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
          >
            Instagram
          </FooterLink>
          <FooterLink 
            as="a" 
            href="https://discord.com" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
          >
            Discord
          </FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {new Date().getFullYear()} GNS Astronomy Club. All rights reserved.</p>
        <p>Website created by GNS Web Dev Club and Brendan Lo.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
