// Theme configuration for the GNS Astronomy Club website
const theme = {
  colors: {
    // Deep space colors
    primary: '#0B3D91', // NASA blue
    secondary: '#FC3D21', // NASA red
    background: '#030014', // Deep space black
    backgroundLight: '#0A0A2A', // Midnight blue
    text: '#FFFFFF', // White
    textSecondary: '#B8B8D1', // Light lavender
    accent1: '#7B68EE', // Medium slate blue
    accent2: '#9370DB', // Medium purple
    accent3: '#663399', // Rebecca purple
    starYellow: '#FFD700', // Gold for stars
    starWhite: '#F8F8FF', // Ghost white for stars
    planetRed: '#B22222', // Firebrick for Mars-like planets
    planetBlue: '#1E90FF', // Dodger blue for Earth-like planets
    planetGas: '#DAA520', // Goldenrod for gas giants
  },
  fonts: {
    main: "'Montserrat', sans-serif",
    heading: "'Orbitron', sans-serif",
    special: "'Nova Square', cursive",
  },
  sizes: {
    maxWidth: '1200px',
    navHeight: '80px',
  },
  shadows: {
    text: '0 0 10px rgba(255, 255, 255, 0.5)',
    neon: '0 0 10px #7B68EE, 0 0 20px #7B68EE, 0 0 30px #7B68EE',
    box: '0 5px 15px rgba(0, 0, 0, 0.5)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #0B3D91 0%, #1E90FF 100%)',
    cosmic: 'linear-gradient(to right, #434343 0%, #000000 100%)',
    nebula: 'linear-gradient(to right, #663399 0%, #5B2C6F 50%, #2C3E50 100%)',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
  transitions: {
    standard: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    fast: '0.2s ease-in-out',
  }
};

export default theme;
