import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  color: ${props => props.theme.colors.text};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 8px ${props => props.theme.colors.secondary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

const SectionSubtitle = styled(motion.h3)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const Button = styled(motion.button)`
  background: ${props => props.primary ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.theme.colors.text};
  border: ${props => props.primary ? 'none' : `2px solid ${props.theme.colors.primary}`};
  padding: 0.8rem 2rem;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.primary ? props.theme.shadows.box : 'none'};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? props.theme.gradients.primary : 'rgba(11, 61, 145, 0.1)'};
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled(motion.div)`
  background: rgba(10, 10, 42, 0.7); /* Increased opacity for better contrast */
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.box};
  border: 1px solid rgba(123, 104, 238, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  /* Text inside cards will be more readable */
  & h1, & h2, & h3, & h4, & h5, & h6, & p {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(123, 104, 238, 0.4);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '300px'}, 1fr));
  gap: ${props => props.gap || '2rem'};
  margin: ${props => props.margin || '2rem 0'};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap || '1rem'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

const Spacer = styled.div`
  height: ${props => props.height || '2rem'};
`;

// New component for text with enhanced readability
const EnhancedText = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  font-size: ${props => props.size || '1rem'};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  
  /* Optional backdrop for extreme cases where text needs to be super readable */
  ${props => props.withBackdrop && `
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.5rem;
    border-radius: 4px;
  `}
`;

export { 
  SectionTitle, 
  SectionSubtitle, 
  Button, 
  Card, 
  Grid, 
  Flex, 
  Spacer,
  EnhancedText
};
