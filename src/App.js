import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/global.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Layout } from './components/Layout';
import SEO from './components/SEO';
import AccessibilityControls from './components/AccessibilityControls';
import ParticleBackground from './components/ParticleBackground';
import PlanetaryRingSystem from './components/PlanetaryRingSystem';
import StarField from './components/StarField';
import NebulaEffect from './components/NebulaEffect';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BoardPage from './pages/BoardPage';

// Location wrapper to provide current path to visual effects
const LocationAwareApp = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState('/');
  
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  
  // Only show visual effects on home page
  const isHomePage = pathname === '/';
  
  return (
    <>
      <SEO />
      {isHomePage && <NebulaEffect pathname={pathname} />}
      {isHomePage && <StarField pathname={pathname} />}
      {isHomePage && <PlanetaryRingSystem pathname={pathname} />}
      {isHomePage && <ParticleBackground pathname={pathname} />}
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </Layout>
      <Footer />
      <AccessibilityControls />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <LocationAwareApp />
      </Router>
    </ThemeProvider>
  );
}

export default App;
