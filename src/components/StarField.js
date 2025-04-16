import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const StarField = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Star class with varied sizes and effects
    class Star {
      constructor(x, y, radius, color, twinkleSpeed, moveSpeed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.baseRadius = radius;
        this.color = color;
        this.twinkleSpeed = twinkleSpeed;
        this.twinkleAmount = Math.random() * 0.5 + 0.5;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.moveSpeed = moveSpeed;
        this.angle = Math.random() * Math.PI * 2;
        this.glowSize = radius * (Math.random() * 3 + 2);
        this.glowOpacity = Math.random() * 0.3 + 0.1;
        
        // For stars that have rays
        this.hasRays = radius > 2 && Math.random() > 0.6;
        this.rayCount = Math.floor(Math.random() * 4) + 4;
        this.rayLength = radius * (Math.random() * 3 + 2);
        this.rayWidth = Math.random() * 1 + 0.5;
        this.rayAngle = Math.random() * Math.PI * 2;
        this.rayRotationSpeed = (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        
        // For pulsing stars
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulsePhase = Math.random() * Math.PI * 2;
        
        // For color shifting stars
        this.colorShift = Math.random() > 0.7;
        this.hue = Math.random() * 360;
        this.hueSpeed = Math.random() * 0.5 + 0.1;
      }

      update() {
        // Twinkle effect
        this.twinklePhase += this.twinkleSpeed;
        const twinkleFactor = Math.sin(this.twinklePhase) * this.twinkleAmount;
        this.radius = this.baseRadius * (1 + twinkleFactor * 0.3);
        
        // Subtle movement
        this.x += Math.cos(this.angle) * this.moveSpeed;
        this.y += Math.sin(this.angle) * this.moveSpeed;
        
        // Change direction occasionally
        if (Math.random() < 0.01) {
          this.angle = Math.random() * Math.PI * 2;
        }
        
        // Keep stars within bounds
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        
        // Rotate rays
        if (this.hasRays) {
          this.rayAngle += this.rayRotationSpeed;
        }
        
        // Color shift for special stars
        if (this.colorShift) {
          this.hue += this.hueSpeed;
          if (this.hue > 360) this.hue = 0;
        }
      }

      draw(ctx) {
        ctx.save();
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.glowSize
        );
        
        let color = this.color;
        if (this.colorShift) {
          color = `hsl(${this.hue}, 100%, 80%)`;
        }
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = this.glowOpacity * (0.5 + Math.sin(this.twinklePhase) * 0.5);
        ctx.fill();
        
        // Draw star core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 1;
        ctx.fill();
        
        // Draw rays for larger stars
        if (this.hasRays) {
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rayAngle);
          
          for (let i = 0; i < this.rayCount; i++) {
            const angle = (i / this.rayCount) * Math.PI * 2;
            ctx.save();
            ctx.rotate(angle);
            
            // Draw ray
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(this.rayLength, 0);
            ctx.lineWidth = this.rayWidth;
            ctx.strokeStyle = color;
            ctx.globalAlpha = 0.7 * (0.5 + Math.sin(this.twinklePhase) * 0.5);
            ctx.stroke();
            
            ctx.restore();
          }
        }
        
        ctx.restore();
      }
    }

    // Create stars with varied sizes and effects
    const stars = [];
    
    // Tiny background stars (many)
    for (let i = 0; i < 300; i++) {
      stars.push(new Star(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 0.5 + 0.1,
        'rgba(255, 255, 255, 0.8)',
        Math.random() * 0.03 + 0.01,
        Math.random() * 0.05 + 0.01
      ));
    }
    
    // Small stars
    for (let i = 0; i < 150; i++) {
      stars.push(new Star(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1 + 0.5,
        'rgba(255, 255, 255, 0.9)',
        Math.random() * 0.05 + 0.02,
        Math.random() * 0.1 + 0.05
      ));
    }
    
    // Medium stars
    for (let i = 0; i < 50; i++) {
      const colors = [
        'rgba(255, 255, 255, 1)',
        'rgba(173, 216, 230, 1)',
        'rgba(255, 223, 0, 1)',
        'rgba(255, 160, 122, 1)'
      ];
      stars.push(new Star(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1.5 + 1,
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 0.07 + 0.03,
        Math.random() * 0.15 + 0.05
      ));
    }
    
    // Large stars (few)
    for (let i = 0; i < 20; i++) {
      const colors = [
        'rgba(255, 255, 255, 1)',
        'rgba(135, 206, 250, 1)',
        'rgba(255, 215, 0, 1)',
        'rgba(255, 99, 71, 1)',
        'rgba(147, 112, 219, 1)'
      ];
      stars.push(new Star(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 2 + 2,
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 0.1 + 0.05,
        Math.random() * 0.2 + 0.1
      ));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
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

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default StarField;
