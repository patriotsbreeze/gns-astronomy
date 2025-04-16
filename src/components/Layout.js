import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: ${props => props.theme.sizes.navHeight};
  padding-bottom: 2rem;
`;

const PageContainer = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageSection = styled(motion.section)`
  padding: 4rem 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 0;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export { Layout, PageContainer, PageSection };
