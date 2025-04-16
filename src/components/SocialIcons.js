import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIconLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(11, 61, 145, 0.3);
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const SocialIcons = ({ className }) => {
  return (
    <SocialIconsContainer className={className}>
      <SocialIconLink 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </SocialIconLink>
      <SocialIconLink 
        href="https://discord.com" 
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Discord"
      >
        <i className="fab fa-discord"></i>
      </SocialIconLink>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
