import React, { useEffect, useState } from 'react';
import './Background.css'; 

const Background = () => {
    const [animationStarted, setAnimationStarted] = useState(false);
  
    useEffect(() => {
      // Start animation after a slight delay to ensure page load
      const timer = setTimeout(() => {
        setAnimationStarted(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
      const interBubble = document.querySelector('.interactive');
      if (!interBubble) return;
  
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
      const attractionStrength = 0.1;
      const maxDistance = 100;
  
      function move() {
        curX += (tgX - curX) * attractionStrength;
        curY += (tgY - curY) * attractionStrength;
  
        const distX = Math.abs(tgX - curX);
        const distY = Math.abs(tgY - curY);
        const distance = Math.sqrt(distX ** 2 + distY ** 2);
  
        const scale = 1 + (1 - Math.min(distance / maxDistance, 1)) * 0.3;
        const glow = Math.min(distance / maxDistance, 1) * 50;
  
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px) scale(${scale}) rotate(${distance * 0.1}deg)`;
        interBubble.style.boxShadow = `0 0 ${glow}px rgba(128, 0, 128, 0.8)`;
  
        requestAnimationFrame(move);
      }
  
      const handleMouseMove = (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      move();
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className={`gradient-bg ${animationStarted ? 'animate-gradients' : ''}`}>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    );
  };

export default Background;