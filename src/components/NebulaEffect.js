import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
`;

const NebulaEffect = ({ pathname }) => {
  // Only show on home page
  const isHomePage = pathname === '/' || !pathname;
  
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isHomePage) return; // Don't run effect on other pages
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Nebula cloud class - reverted to triangular shape but with reduced brightness
    class NebulaCloud {
      constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.baseRadius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.noiseOffset = Math.random() * 1000;
        this.noiseSpeed = Math.random() * 0.005 + 0.001;
        this.opacity = Math.random() * 0.08 + 0.02; // Further reduced opacity
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        // Restored distortion properties but with reduced values
        this.distortionAmount = Math.random() * 10 + 5; // Reduced from 20+10
        this.distortionSpeed = Math.random() * 0.01 + 0.005;
        this.distortionPhase = Math.random() * Math.PI * 2;
        this.hue = parseInt(color.split('(')[1].split(',')[0]);
        this.hueShift = Math.random() * 0.5 + 0.1;
        this.hueDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update(mouseX, mouseY) {
        // Subtle movement
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Change direction with noise
        this.noiseOffset += this.noiseSpeed;
        this.angle += Math.sin(this.noiseOffset) * 0.05;
        
        // Keep within bounds
        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;
        
        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
        const pulseFactor = 0.5 + Math.sin(this.pulsePhase) * 0.5;
        this.radius = this.baseRadius * (0.8 + pulseFactor * 0.4);
        this.opacity = (Math.random() * 0.02 + 0.02) + pulseFactor * 0.04; // Further reduced opacity
        
        // Distortion phase
        this.distortionPhase += this.distortionSpeed;
        
        // Color shifting
        this.hue += this.hueShift * this.hueDirection;
        if (this.hue > 360) this.hue = 0;
        if (this.hue < 0) this.hue = 360;
        
        // Mouse interaction - gentle attraction
        if (mouseX && mouseY) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const force = (300 - distance) / 10000;
            this.x += dx * force;
            this.y += dy * force;
          }
        }
      }

      draw(ctx) {
        ctx.save();
        
        // Create distorted shape (triangular with rounded corners)
        ctx.beginPath();
        
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2;
          const distortedRadius = this.radius + Math.sin(angle * 3 + this.distortionPhase) * this.distortionAmount;
          
          const x = this.x + Math.cos(angle) * distortedRadius;
          const y = this.y + Math.sin(angle) * distortedRadius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        
        // Create gradient with reduced brightness
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 1.5
        );
        
        // Reduced saturation and lightness for better text readability
        const color = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`;
        const transparentColor = `hsla(${this.hue}, 80%, 60%, 0)`;
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, transparentColor);
        
        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = 'screen';
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create nebula clouds - reduced size and quantity
    const nebulaClouds = [];
    
    // Different sizes and colors of nebula clouds with reduced saturation
    const colors = [
      'hsl(280, 80%, 60%)', // Purple
      'hsl(200, 80%, 60%)', // Blue
      'hsl(170, 80%, 60%)', // Teal
      'hsl(350, 80%, 60%)', // Pink
      'hsl(30, 80%, 60%)',  // Orange
    ];
    
    // Large background clouds - further reduced size and quantity
    for (let i = 0; i < 3; i++) {
      nebulaClouds.push(new NebulaCloud(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 100 + 40, // Reduced size
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 0.2 + 0.1
      ));
    }
    
    // Medium clouds - reduced quantity
    for (let i = 0; i < 6; i++) {
      nebulaClouds.push(new NebulaCloud(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 60 + 20, // Reduced size
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 0.3 + 0.2
      ));
    }
    
    // Small detail clouds
    for (let i = 0; i < 10; i++) {
      nebulaClouds.push(new NebulaCloud(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 30 + 10, // Reduced size
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 0.4 + 0.3
      ));
    }

    // Animation loop
    const animate = () => {
      // Clear with fade effect instead of complete clear
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw nebula clouds
      nebulaClouds.forEach(cloud => {
        cloud.update(mousePosition.current.x, mousePosition.current.y);
        cloud.draw(ctx);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [isHomePage]);

  if (!isHomePage) return null; // Don't render on other pages

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default NebulaEffect;
