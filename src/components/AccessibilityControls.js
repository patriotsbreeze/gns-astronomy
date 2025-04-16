import React from 'react';
import styled from 'styled-components';

const AccessibilityContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AccessibilityButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.colors.secondary};
  }
`;

const AccessibilityControls = () => {
  const increaseTextSize = () => {
    const html = document.querySelector('html');
    const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
    html.style.fontSize = `${currentSize * 1.1}px`;
  };

  const decreaseTextSize = () => {
    const html = document.querySelector('html');
    const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
    html.style.fontSize = `${currentSize * 0.9}px`;
  };

  return (
    <AccessibilityContainer>
      <AccessibilityButton 
        onClick={increaseTextSize}
        aria-label="Increase text size"
        title="Increase text size"
      >
        A+
      </AccessibilityButton>
      <AccessibilityButton 
        onClick={decreaseTextSize}
        aria-label="Decrease text size"
        title="Decrease text size"
      >
        A-
      </AccessibilityButton>
    </AccessibilityContainer>
  );
};

export default AccessibilityControls;
