import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoText = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 10px;
  
  span.highlight {
    color: ${props => props.theme.colors.secondary};
  }
`;

const LogoIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  position: relative;
  
  .planet {
    position: absolute;
    border-radius: 50%;
    background: ${props => props.theme.gradients.primary};
    width: 25px;
    height: 25px;
    top: 7.5px;
    left: 0;
    box-shadow: 0 0 10px rgba(30, 144, 255, 0.8);
  }
  
  .orbit {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
  
  .moon {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${props => props.theme.colors.starYellow};
    border-radius: 50%;
    top: 0;
    left: 16px;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.8);
  }
`;

const Logo = () => {
  return (
    <LogoContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LogoIcon>
        <motion.div 
          className="orbit"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <div className="planet" />
        <motion.div 
          className="moon"
          animate={{ 
            rotate: 360,
          }}
          style={{ 
            originX: 0.5,
            originY: 2.5
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </LogoIcon>
      <LogoText>
        GNS <span className="highlight">Astronomy</span>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
