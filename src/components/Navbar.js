import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: ${props => props.theme.sizes.navHeight};
  background: rgba(3, 0, 20, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: ${props => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: ${props => props.theme.sizes.navHeight};
  left: 0;
  right: 0;
  background: rgba(3, 0, 20, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const MobileNavLink = styled(NavLink)`
  padding: 0.5rem 0;
  font-size: 1.2rem;
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <>
      <NavbarContainer>
        <Logo />
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/board">Board</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialIcon 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon 
            href="https://discord.com" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </SocialIcon>
        </SocialLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavbarContainer>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
        <MobileNavLink to="/board" onClick={() => setMobileMenuOpen(false)}>Board</MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
