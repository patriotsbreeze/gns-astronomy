import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const PlanetaryRingSystem = () => {
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

    // Planet class
    class Planet {
      constructor(x, y, radius, color, ringColor, ringWidth, ringAngle, rotationSpeed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.ringColor = ringColor;
        this.ringWidth = ringWidth;
        this.ringAngle = ringAngle;
        this.rotationSpeed = rotationSpeed;
        this.rotation = 0;
        this.orbitRadius = Math.random() * 100 + 50;
        this.orbitSpeed = Math.random() * 0.001 + 0.0005;
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.centerX = x;
        this.centerY = y;
        this.moons = [];
        
        // Create moons
        const moonCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < moonCount; i++) {
          this.moons.push({
            radius: this.radius * (Math.random() * 0.2 + 0.1),
            distance: this.radius * (Math.random() * 2 + 2),
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.01,
            color: `rgba(${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, 0.8)`
          });
        }
      }

      update() {
        // Update planet orbit position
        this.orbitAngle += this.orbitSpeed;
        this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius;
        this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius;
        
        // Update planet rotation
        this.rotation += this.rotationSpeed;
        
        // Update moons
        this.moons.forEach(moon => {
          moon.angle += moon.speed;
        });
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Draw planet
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0.5)`);
        
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw surface details
        ctx.save();
        ctx.rotate(this.rotation);
        ctx.beginPath();
        
        // Add bands or surface features
        const bandCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < bandCount; i++) {
          const bandY = (i - bandCount/2) * this.radius * 0.4;
          const bandHeight = this.radius * 0.2;
          ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
          ctx.fillRect(-this.radius, bandY, this.radius * 2, bandHeight);
        }
        
        ctx.restore();
        
        // Draw ring
        ctx.save();
        ctx.rotate(this.ringAngle);
        ctx.scale(1, 0.2); // Flatten to create ellipse
        
        // Outer ring
        const ringGradient = ctx.createRadialGradient(0, 0, this.radius, 0, 0, this.radius + this.ringWidth);
        ringGradient.addColorStop(0, `rgba(${this.ringColor}, 0.1)`);
        ringGradient.addColorStop(0.4, `rgba(${this.ringColor}, 0.6)`);
        ringGradient.addColorStop(0.6, `rgba(${this.ringColor}, 0.8)`);
        ringGradient.addColorStop(0.8, `rgba(${this.ringColor}, 0.4)`);
        ringGradient.addColorStop(1, `rgba(${this.ringColor}, 0.1)`);
        
        ctx.beginPath();
        ctx.arc(0, 0, this.radius + this.ringWidth, 0, Math.PI * 2);
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = ringGradient;
        ctx.fill();
        
        // Ring details - add some lines
        for (let i = 0; i < 8; i++) {
          const ringRadius = this.radius + (this.ringWidth * (i / 8));
          ctx.beginPath();
          ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${this.ringColor}, ${Math.random() * 0.2 + 0.1})`;
          ctx.lineWidth = Math.random() * 2 + 0.5;
          ctx.stroke();
        }
        
        ctx.restore();
        
        // Draw moons
        this.moons.forEach(moon => {
          const moonX = Math.cos(moon.angle) * moon.distance;
          const moonY = Math.sin(moon.angle) * moon.distance;
          
          ctx.beginPath();
          ctx.arc(moonX, moonY, moon.radius, 0, Math.PI * 2);
          ctx.fillStyle = moon.color;
          ctx.fill();
          
          // Moon shadow
          ctx.beginPath();
          ctx.arc(moonX, moonY, moon.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
          ctx.fill();
        });
        
        // Draw shadow
        ctx.beginPath();
        ctx.arc(5, 5, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create planets with rings
    const planets = [
      new Planet(
        width * 0.25, 
        height * 0.3, 
        40, 
        'rgba(218, 165, 32, 1)', 
        '255, 215, 0', 
        60, 
        Math.PI / 6, 
        0.005
      ),
      new Planet(
        width * 0.75, 
        height * 0.7, 
        50, 
        'rgba(147, 112, 219, 1)', 
        '138, 43, 226', 
        80, 
        -Math.PI / 8, 
        0.003
      ),
      new Planet(
        width * 0.6, 
        height * 0.2, 
        30, 
        'rgba(70, 130, 180, 1)', 
        '30, 144, 255', 
        45, 
        Math.PI / 4, 
        0.007
      )
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw planets
      planets.forEach(planet => {
        planet.update();
        planet.draw(ctx);
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
      
      // Reposition planets
      planets[0].centerX = width * 0.25;
      planets[0].centerY = height * 0.3;
      planets[1].centerX = width * 0.75;
      planets[1].centerY = height * 0.7;
      planets[2].centerX = width * 0.6;
      planets[2].centerY = height * 0.2;
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

export default PlanetaryRingSystem;
